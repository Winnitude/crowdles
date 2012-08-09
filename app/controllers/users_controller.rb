class UsersController < ApplicationController
  before_filter :should_be_user
  before_filter :get_user
  before_filter :should_be_local_admin, :only => [:user_management , :to_worker ]
  before_filter :should_be_AGO ,:only => [:to_admin_group_worker,:to_business_group_owner]
  before_filter :should_be_LA_or_GA => [:manage_users , :edit_user , :update_user,:show_user]

  autocomplete :country_detail, :name
  def user_management
  # @users = User.where(:country=>fetch_county_name(@user)).where(:role => "User")
  # role= Role.where(:role => "User").first
  # all_users_role = UserRole.all.select{|i| i.role == role if i.role.present?}
  # @users=all_users_role.collect{|i| i.user}
  #  @users = User.get_all_user_for_selected_role "User"

  end

  def manage_users
    users = User.get_all_user_for_selected_role "User"
    admins = User.get_all_user_for_selected_role "Local Admin"
    @users = (users - admins).paginate(:page => params[:page], :per_page => 10)
  end

  def all_users
    @users = User.all
  end

  def show_user
    @user = User.find(params[:id])
  end

  def suspend_user
    @user = User.find(params[:id])
    toggle_user @user
    redirect_to :back ,:notice => "Done Successfully"
  end

  def canceled_user_account
    @user = User.find(params[:id])
    canceled_user @user
    redirect_to :back ,:notice => "Done Successfully"
  end

  def edit_user
    @user = User.find(params[:id])
    @profile = @user.profile.present? ? @user.profile : @user.build_profile
  end

  def update_user
    params[:user][:profile][:birth_date] = format_birth_date(params[:user][:profile][:birth_date])  if    params[:user][:profile][:birth_date].present?
    @user = User.find(params[:id])
   if @user.update_attributes(params[:user])
    #render :json => params
    redirect_to manage_users_users_path, :notice => "User updated Successfully"
   else
     @profile = @user.profile.present? ? @user.profile : @user.build_profile
     render :action => "edit_user"
     end
  end

  def to_worker
    @user = User.find params[:id]
    @user.create_worker
    @user.save
    #logger.info "user##########{@user.role}"
    UserMailer.notification_for_switching_to_worker(@user,"Worker").deliver
    redirect_to  all_users_globally_local_admins_path, :notice => "Successfully Changed To Worker"
  end

  def to_admin_group_worker #TODO need to be refactored
    @user = User.find params[:id]
    #@user.change_role_to_AGW(current_user)
    #admin_group_worker =current_user.admin_group.admin_group_workers.new
    admin_group = current_user.get_admin_group
    admin_group_worker = admin_group.admin_group_workers.new
    admin_group_worker.user= @user
    #@user.role = "Admin Group Worker"
    RolesManager.add_role("Admin Group Worker",@user)
    if @user.save && admin_group.save && admin_group_worker.save

      #logger.info "#############################{admin_group_worker.inspect}"
      #logger.info "#########################################################{admin_group.inspect}"
      #logger.info "#######user###################################{@user.inspect}"

      #@user.save
      #logger.info "user##########{@user.role}###############id#{@user.agw_ago_id}"
      UserMailer.notification_for_switching_to_worker(@user,"Admin Group Worker").deliver
      redirect_to  view_all_workers_admin_group_owners_path, :notice => "Successfully Changed To AGW"
    else
      redirect_to  :back, :notice => "failure"
    end

  end

  def  to_business_group_owner
    @user = User.find params[:id]
    @business_group = BusinessGroup.new
    #@user.change_role_to_BGO(current_user)

    #@user.save
    #logger.info "user##########{@user.role}###############id#{@user.bgo_ago_id}"
    #UserMailer.notification_for_switching_to_worker(@user).deliver


    #redirect_to  all_my_admin_group_workers_admin_group_owners_path, :notice => "Successfully Changed To BGO"
  end

  def business_groups
   @business_groups = BusinessGroup.where(:bg_visibility => "Public")
  end

  def admin_group_list
    @admin_groups = current_user.admin_groups
    #binding.remote_pry
  end
  private

  def should_be_local_admin
    redirect_to root_path ,:notice => "Sorry you are not allowed to perform this activity"  unless RolesManager.is_role_present?("Local Admin", current_user)
  end

  def should_be_AGO
    redirect_to root_path, :notice => "You should have the AGO privileges to perform this action" unless RolesManager.is_role_present?("Admin Group Owner", current_user)
  end

  def should_be_LA_or_GA
    redirect_to root_path ,:notice => "Sorry you are not allowed to perform this activity"  unless (RolesManager.is_role_present?("Local Admin", current_user) or RolesManager.is_role_present?("Global Admin", current_user))
  end
end
