class Admin::LocalAdminsController < ApplicationController
  before_filter :should_be_GA ,:only => [:create_local_admin, :new_local_admin ,:change_admin_role]
  #before_filter :should_not_be_fake_country, :only => [:create_local_admin,:update_local_admin]
  #before_filter :should_not_be_fake_language, :only => [:create_local_admin,:update_local_admin]
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
    @profile =@local_admin.build_profile
  end

  #NOTE this will create local admin
  #TODO need to make it refactored
  def create_local_admin
    # the below statement will check weather the user exist or not if not exist then create new user
    @local_admin = User.where(:email => params[:user][:email]).first.present? ? User.where(:email => params[:user][:email]).first : User.new(params[:user])
    logger.info "ffffffffffffffffffffffffffffffffffffff#{@local_admin.inspect}"
    if @local_admin.get_all_roles.include?("Local Admin")
      redirect_to new_local_admin_local_admins_path , :notice => "User already has Local Admin"
    else
      value = @local_admin.set_owner_attributes  if @local_admin.new_record?

      # the below if check weathe we need to create the profile or not
      if @local_admin.new_record? || !(@local_admin.profile.present?)
        @profile =@local_admin.build_profile params[:profile]
      else
        @profile = @local_admin.profile
      end

      @la_setting = @local_admin.build_la_setting params[:la_setting]
      @la_setting.fix_attributes
      @local_admin.country = @la_setting.la_country    if @local_admin.new_record?
      if @local_admin.save && @profile.save && @la_setting.save
        @local_admin.add_role "Local Admin"
        @local_admin.remove_role "User"
        LaMailer.welcome_email(@local_admin,@profile,value,@la_setting).deliver if value.present?
        LaMailer.welcome_email_existing_user(@local_admin,@la_setting).deliver if value.present? == false
        @pass_billing_profile = @la_setting.build_platform_billing_profile
        #if @local_admin.default_billing_profile.present?
        #  @pass_billing_profile.set_bp_attributes @local_admin
        #end
        @pass_billing_profile.save!
        redirect_to edit_pass_billing_profile_path(@pass_billing_profile) ,:notice => "Local Admin Created Successfully "
      else
        render :new_local_admin
      end
    end

  end

  def edit_admin_group
    @admin_group_owner = User.find params[:id]
    #@la_setting = current_user.la_setting
    @profile = @admin_group_owner.profile
    @admin_group = @admin_group_owner.admin_group
    @product = @admin_group_owner.user_products.first.product

  end

  def update_admin_group
    params[:admin_group][:free_paas_expiration_date] = format_birth_date(params[:admin_group][:free_paas_expiration_date])      if params[:admin_group][:free_paas_expiration_date].present?
    @admin_group_owner = User.find params[:id]
    @profile = @admin_group_owner.profile
    @admin_group = @admin_group_owner.admin_group
    if @admin_group_owner.update_attributes(params[:user])  && @profile.update_attributes(params[:profile])  && @admin_group.update_attributes(params[:admin_group])
      redirect_to  manage_admin_group_local_admins_path , :notice => "Admin Group Updated"
    else
      render :action => "edit_admin_group"
    end

  end

  def edit_local_admin
    @local_admin = User.find(params[:id])
    @la_setting = @local_admin.la_setting
    @profile = @local_admin.profile
    #render :json=> @admin
  end

  def update_local_admin
    @admin = User.find(params[:id])
    @profile =  @admin.profile
    @la_setting = @admin.la_setting || @admin.build_la_setting

    if @admin.update_attributes(params[:user]) && @la_setting.update_attributes(params[:la_setting]) && @profile.update_attributes(params[:profile])
      redirect_to all_admins_global_admins_path, :notice => "successfully_updated"
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
    @admin_groups = current_user.la_setting.admin_groups
  end

  def new_admin_group
    @admin_group_owner = User.new
    #@la_setting = current_user.la_setting
    @profile = @admin_group_owner.build_profile
    @admin_group = @admin_group_owner.build_admin_group
    @admin_group.la_setting = current_user.la_setting
    @products = Product.all
  end

  #NOTE change worker to admin group owner
  def admin_group_creation
    params[:admin_group][:free_paas_expiration_date] = format_birth_date(params[:admin_group][:free_paas_expiration_date])      if params[:admin_group][:free_paas_expiration_date].present?
    @admin_group_owner = User.where(:email => params[:user][:email]).first.present? ? User.where(:email => params[:user][:email]).first : User.new(params[:user])
    if (@admin_group_owner.get_all_roles.include?("Admin Group Owner")   ||    @admin_group_owner.get_all_roles.include?("Main Admin Group Owner"))
      redirect_to new_admin_group_local_admins_path  , :notice  => "User selected is already Admin Group Owner"
    else
      value =  @admin_group_owner.set_owner_attributes  if  @admin_group_owner.new_record?
      # the below if check weather we need to create the profile or not
      if  @admin_group_owner.new_record? || !( @admin_group_owner.profile.present?)
        @profile = @admin_group_owner.build_profile params[:profile]
      else
        @profile = @admin_group_owner.profile
      end

      @admin_group = @admin_group_owner.build_admin_group params[:admin_group]
      #set la_setting for group
      @admin_group.la_setting = current_user.la_setting
      #also assign cuntry to him
      @admin_group_owner.country = @admin_group.la_setting.la_country   if  @admin_group_owner.new_record?
      @product = Product.find(params[:product])
      @user_product = @admin_group_owner.user_products.new
      @user_product.product = @product
      if @admin_group_owner.save && @user_product.save && @admin_group.save
        @admin_group_owner.add_role "Admin Group Owner"
        AgMailer.welcome_email(@admin_group_owner,@profile,value,current_user.la_setting).deliver if value.present?
        AgMailer.welcome_email_existing_user(@admin_group_owner,current_user.la_setting).deliver if value.present? == false
        redirect_to  manage_admin_group_local_admins_path , :notice => "Admin Group Created"
      else
        render :action => "new_admin_group"
      end
    end


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

  def check_for_existing_user
    @user = User.where(:email => params[:email]).first
    #logger.info (@user.profile.first_name.inspect)
  end

  def check_for_existing_user_for_ag
    @ag_owner_user = User.where(:email => params[:email]).first
    logger.info (@user.profile.first_name.inspect)
  end

  def get_product_details
    @product =Product.find(params[:product])
    logger.info @product.inspect
  end

  def edit_main_admin_group
    @admin_group_owner = User.find params[:id]
    @profile = @admin_group_owner.profile
    @admin_group = @admin_group_owner.admin_group
    @product = @admin_group_owner.user_products.first.product
  end

  def update_main_admin_group
    params[:admin_group][:free_paas_expiration_date] = format_birth_date(params[:admin_group][:free_paas_expiration_date])      if params[:admin_group][:free_paas_expiration_date].present?
    @admin_group_owner = User.find params[:id]
    @profile = @admin_group_owner.profile
    @admin_group = @admin_group_owner.admin_group
    if @admin_group_owner.update_attributes(params[:user])  && @profile.update_attributes(params[:profile])  && @admin_group.update_attributes(params[:admin_group])
      redirect_to  all_admins_global_admins_path , :notice => "Admin Group Updated"  if current_user.has_role "Global Admin"
      redirect_to manage_admin_group_local_admins_path, :notice => "successfully_updated"   if current_user.has_role "Local Admin"
    else
      render :action => "edit_main_admin_group"
    end
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
