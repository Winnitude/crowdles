class UsersController < ApplicationController

  before_filter :should_be_user
  before_filter :get_user

  def user_management
    @users = User.where(:country=>fatch_county_name(@user))
  end

  def show_user_to_local_admin
    @user = User.find(params[:id])
  end

  def suspend_user
    @user = User.find(params[:id])
    toggle_user @user
    redirect_to user_management_path
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


  private

end
