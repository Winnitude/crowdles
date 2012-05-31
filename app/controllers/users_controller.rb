class UsersController < ApplicationController

  before_filter :should_be_user
  before_filter :get_user
  before_filter :should_be_local_admin, :only => [:user_management , :to_worker ,:show_user_to_local_admin]
  before_filter :should_be_AGO ,:only => [:to_admin_group_worker,:to_business_group_owner]


  def user_management
    @users = User.where(:country=>fetch_county_name(@user)).where(:role => "User")
  end

  def all_users
    @users = User.all
  end

  def show_user_to_local_admin
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

  def edit_user_info
    @user = User.find(params[:id])
  end

  def update_user_info
    params[:user][:profile][:birth_date] = format_birth_date(params[:user][:profile][:birth_date])
    @user = User.find(params[:id])
    @user.update_user_from_loca_admin params[:user]
    #@user.update_attributes(params[:user])
    redirect_to user_management_path
  end

  def to_worker
    @user = User.find params[:id]
    @user.create_worker
    @user.save
    logger.info "user##########{@user.role}"
    UserMailer.notification_for_switching_to_worker(@user).deliver
    redirect_to  all_users_globally_local_admins_path, :notice => "Successfully Changed To Worker"
  end

  def to_admin_group_worker #TODO need to be refactored
    @user = User.find params[:id]
    #@user.change_role_to_AGW(current_user)
    #admin_group_worker =current_user.admin_group.admin_group_workers.new
    admin_group = current_user.get_admin_group
    admin_group_worker = admin_group.admin_group_workers.new
    admin_group_worker.user= @user
    @user.role = "Admin Group Worker"
    if @user.save && admin_group.save && admin_group_worker.save

      #logger.info "#############################{admin_group_worker.inspect}"
      #logger.info "#########################################################{admin_group.inspect}"
      #logger.info "#######user###################################{@user.inspect}"

      #@user.save
      #logger.info "user##########{@user.role}###############id#{@user.agw_ago_id}"
      UserMailer.notification_for_switching_to_worker(@user).deliver
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

  private

  def should_be_local_admin
    redirect_to root_path ,:notice => "Sorry you are not allowed to perform this activity"  unless current_user.role == "Local Admin"
  end

  def should_be_AGO
    redirect_to root_path, :notice => "You should have the AGO privileges to perform this action"   if current_user.role != "Admin Group Owner"
  end
end
