class UsersController < ApplicationController

  before_filter :should_be_user
  before_filter :get_user
  before_filter :users_from_local_admins_country

  def user_management

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


  private

  def users_from_local_admins_country
    @users = User.where(:country=>fatch_county_name(@user))
  end
end
