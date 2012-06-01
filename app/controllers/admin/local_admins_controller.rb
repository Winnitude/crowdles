class Admin::LocalAdminsController < ApplicationController
  before_filter :should_be_GA ,:only => [:create_local_admin, :new_local_admin ,:change_admin_role]
  before_filter :get_user
  autocomplete :country_detail, :name

  def show_local_admin
   # @local_admins = User.where(:role => "Local Admin").to_a
    @local_admins = User.get_all_user_for_selected_role "Local Admin"
  end

  def change_admin_role
    @user = User.find(params[:id])
    toggle_admin @user
    redirect_to :back
  end

  def new_local_admin
    @local_admin= User.new
  end

  #NOTE this will create local admin
  def create_local_admin
    @local_admin = User.new params[:user]
    value = @local_admin.set_la_attributes
    @profile =@local_admin.build_profile params[:profile]
    if @local_admin.save && @profile.save
      RolesManager.add_role("Local Admin", @local_admin)
      RolesManager.remove_role("User", @local_admin)
      #redirect_to root_path ,:notice => "Successfully created"
      LaMailer.welcome_email(@local_admin,@profile,value).deliver
      redirect_to root_path ,:notice => "Successfully created"
    else
     redirect_to :back  ,:notice=>"failure"
    end
  end

  def edit_local_admin
    @admin = User.find(params[:id])
    #render :json=> @admin
  end

  def update_local_admin
    @admin = User.find(params[:id])
    @profile = @admin.profile
    if @admin.update_attributes(params[:user]) && @profile.update_attributes(params[:profile])
    redirect_to :root, :notice => "successfully_updated"
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
    #@user.update_attributes(params[:user])
    redirect_to user_management_path, :notice => "Successfully Updated user information"
  end

  def listing_all_the_workers
    #@workers = User.where(:role=>"Worker").to_a
    @workers = User.get_all_user_for_selected_role "Worker"
  end

  def listing_all_the_agos
   # @AGOS = User.where(:role=>"Admin Group Owner").to_a
    @AGOS = User.get_all_user_for_selected_role "Admin Group Owner"
    @already_having_mago = User.where(:mago_la_id=>@user.id).to_a
  end

  def show_worker_for_change_role
    @selected_user = User.find(params[:id])
    @admin_group = AdminGroup.new
  end

  #NOTE change worker to admin group owner
  def chenge_worker_role
    @selected_user = User.find(params[:id])
    @admin_group = @selected_user.build_admin_group(params[:admin_group])
    @admin_group.save_affillation_key_for_admin_group_owner
    change_to_AGO @selected_user
    LaMailer.changed_role(@selected_user,"Admin Group Owner").deliver
    redirect_to listing_all_the_workers_local_admins_path, :notice => "Successfully Changed To AGO"
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
    redirect_to listing_all_the_agos_local_admins_path , :notice => "Successfully Changed To MAGO"
  end

  def show_admin
    @admin = User.find(params[:id])
    @profile = @admin.profile
  end

  private
  def toggle_admin user   #TODO need to move to user model
   # user.role = user.role == "Local Admin" ? "Main Local Admin" : "Local Admin"
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

  def change_to_AGO user   #TODO need to move to user model
    #user.role = "Admin Group Owner"
    #user.save
    RolesManager.add_role("Admin Group Owner", user)
  end

  def change_to_MAGO user  #TODO need to move to user model
    #user.role = "Main Admin Group Owner"
    user.mago_la_id = @user.id
    user.save
    RolesManager.add_role("Main Admin Group Owner", user)
  end
end
