class UsersController < ApplicationController

  before_filter :should_be_user
  before_filter :get_user
  before_filter :should_be_local_admin, :only => [:user_management , :to_worker ,:show_user_to_local_admin]

  def user_management
    @users = User.where(:country=>fetch_county_name(@user))
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
    redirect_to user_management_path
  end

  def canceled_user_account
    @user = User.find(params[:id])
    canceled_user @user
    redirect_to :back
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


  private

  def should_be_local_admin
    redirect_to root_path ,:notice => "Sorry you are not allowed to perform this activity"  unless current_user.role == "Local Admin"
  end
end
