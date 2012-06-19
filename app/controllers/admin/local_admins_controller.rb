class Admin::LocalAdminsController < ApplicationController
  before_filter :should_be_GA ,:only => [:create_local_admin, :new_local_admin ,:change_admin_role]
  before_filter :should_not_be_fake_language, :only => [:create_local_admin,:update_local_admin]
  before_filter :should_not_be_fake_country, :only => [:create_local_admin,:update_local_admin]
  before_filter :get_user
  autocomplete :country_detail, :name
  #autocomplete :user, :email
  autocomplete :language, :name


  def show_local_admin
    @local_admins = User.get_all_user_for_selected_role "Local Admin"
  end

  def change_admin_role
    @user = User.find(params[:id])
    toggle_admin @user
    redirect_to :back
  end

  def new_local_admin
    @local_admin= User.new
    @la_setting = @local_admin.build_la_setting
    #set_flash_message(:notice,:show_local_admin)
  end

  #NOTE this will create local admin
  #TODO need to make it refactored
  def create_local_admin
    @local_admin = User.new params[:user]
    value = @local_admin.set_la_attributes
    @profile =@local_admin.build_profile params[:profile]
    @la_setting = @local_admin.build_la_setting params[:la_setting]
    @la_setting.fix_attributes
    #@la_setting.is_master = !(LaSetting.is_any_LA_exist_in_system)
    #binding.remote_pry
    if @local_admin.save && @profile.save && @la_setting.save
      #main_admin_group=@local_admin.build_main_admin_group(:country => @local_admin.la_setting.la_country)
      #RolesManager.add_role("Main Admin Group Owner",@local_admin)
      RolesManager.add_role("Local Admin", @local_admin)
      RolesManager.remove_role("User", @local_admin)
      #main_admin_group.set_la_attributes @local_admin
      #main_admin_group.save
      #logger.info "############################{main_admin_group.inspect}"
      #LaMailer.welcome_email(@local_admin,@profile,value,@la_setting).deliver
      redirect_to root_path ,:notice => "Successfully created"
    else
      render :new_local_admin
    end
  end

  def edit_local_admin
    @admin = User.find(params[:id])
    @la_setting = @admin.la_setting || LaSetting.new
    #render :json=> @admin
  end

  def update_local_admin
    @admin = User.find(params[:id])
    @profile =  @admin.profile
    @la_setting = @admin.la_setting || @admin.build_la_setting

    if @admin.update_attributes(params[:user]) && @la_setting.update_attributes(params[:la_setting]) && @profile.update_attributes(params[:profile])
      redirect_to :root, :notice => "successfully_updated"
    else
      render :edit_local_admin
    end
  end

  def all_users_globally
    #@users = User.where(:role => "User").to_a
    @users = User.get_all_user_for_selected_role "User"
  end


  def edit_user_info_from_la
    @user = User.find(params[:id])
  end

  #NOTE this will canceled users account
  def canceled_user_account_from_la
    @selected_user = User.find(params[:id])
    canceled_user @selected_user
    redirect_to :back , :notice => "Successfully Update user"
  end

  #NOTE this will call toggle user and suspend user
  def suspend_user_by_la
    @selected_user = User.find(params[:id])
    toggle_user @selected_user
    redirect_to :back , :notice => "Successfully Update user"
  end

  #NOTE this upadate user info by local admin
  def update_user_info_from_la
    params[:user][:profile][:birth_date] = format_birth_date(params[:user][:profile][:birth_date])
    @user = User.find(params[:id])
    @user.update_user_from_loca_admin params[:user]
    redirect_to user_management_path, :notice => "Successfully Updated user information"
  end

  def listing_all_the_workers
    @workers = User.get_all_user_for_selected_role "Worker"
  end

  def manage_admin_group
    @admin_groups = AdminGroup.where(:country => current_user.la_setting.la_country)
  end

  def add_new_slave_admin_group
    #@selected_user = User.find(params[:id])
    @admin_group = AdminGroup.new
    logger.info "##########---5555-#{current_user.la_setting.inspect}#########"
    @local_admin = current_user.la_setting
  end

  #NOTE change worker to admin group owner
  def admin_group_creation
    @selected_user = User.where(:email=>params[:admin_group][:admin_group_email]).first
    logger.info "##########----#{params.inspect}#########"
    unless @selected_user.blank?
      @selected_user.create_admin_group params[:admin_group] , current_user
      #binding.remote_pry
    else
      #binding.remote_pry
      new_user = User.new(:email=>params[:admin_group][:admin_group_email],:country=>current_user.la_setting.la_country)
      value = new_user.set_la_attributes
      new_user.save
      #LaMailer.welcome_email(new_user,new_user.profile,value,current_user.la_setting).deliver
      UserMailer.welcome_mail_to_ago(new_user,value).deliver
      new_user.create_admin_group params[:admin_group] , current_user
      #binding.remote_pry

    end

    redirect_to manage_admin_group_local_admins_path ,:notice => "Successfully created"

  end

  def show_AGO_for_change_role    #TODO need to move this to main local admin controller
    @selected_user = User.find(params[:id])
    @admin_group = AdminGroup.new
  end

  #NOTE change admin group owner to Main admin group owner
  def change_ago_to_mago   #TODO need to move this to main local admin controller
    @selected_user = User.find(params[:id])
    @admin_group = @selected_user.get_admin_group
    @admin_group.is_master = true
    affillation_key = @admin_group.affillation_key
    affillation_key.remove_affillation_key if !affillation_key.blank?
    @admin_group.save
    change_to_MAGO @selected_user
    LaMailer.changed_role(@selected_user,"Main Admin Group Owner").deliver
    redirect_to manage_admin_group_local_admins_path , :notice => "Successfully Changed To MAGO"
  end

  def show_admin
    @admin = User.find(params[:id])
    @profile = @admin.profile
  end

  def my_settings
    @admin = current_user
    @la_settings = current_user.la_setting
  end

  def update_my_setting
    @la_setting = current_user.la_setting
    #binding.remote_pry
    if @la_setting.update_attributes(params[:la_setting])
      redirect_to :back ,:notice => "updated successfully"
    end
  end

  def teams_management
    @admins = AdminGroup.where(:country => current_user.la_setting.la_country)
    @master_admin_group = MainAdminGroup.where(:country => current_user.la_setting.la_country)
    #binding.remote_pry
    #render :json => @admins
  end

  private
  def toggle_admin user   #TODO need to move to user model
    if RolesManager.is_role_present?("Local Admin", user)
      RolesManager.remove_role("Local Admin", user)
      RolesManager.add_role("Main Local Admin", user)
    else
      RolesManager.remove_role("Main Local Admin", user)
      RolesManager.add_role("Local Admin", user)
    end
                          #user.save
  end
  def  should_be_GA       #TODO need to move to user model
    unless RolesManager.is_role_present?("Global Admin", current_user)
      redirect_to root_path, :notice => "sorry you are not able to perform this activity"
    end
  end


  def change_to_MAGO user  #TODO need to move to user model
    user.mago_la_id = @user.id
    user.save
    RolesManager.add_role("Main Admin Group Owner", user)
  end

  def should_not_be_fake_language
    if Language.is_fake ( params[:la_setting][:language]  )
      redirect_to :back , :notice => "Sorry the language you have selected is not exist"
    end
  end

  def should_not_be_fake_country
    if(CountryDetail.is_fake(params[:la_setting][:la_country]) || CountryDetail.is_fake(params[:user][:country]))
      redirect_to :back , :notice => "Sorry the country you Have selected is not exist"
    end
  end
end
