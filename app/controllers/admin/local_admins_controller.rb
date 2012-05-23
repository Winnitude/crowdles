class Admin::LocalAdminsController < ApplicationController
  before_filter :should_be_GA ,:only => [:create_local_admin, :new_local_admin ,:change_admin_role]

  def show_local_admin
    @local_admins = User.where(:role => "Local Admin").to_a
  end

  def change_admin_role
    @user = User.find(params[:id])
    toggle_admin @user
    redirect_to local_admins_show_local_admin_path
  end

  def new_local_admin
    @local_admin= User.new
  end

  def create_local_admin
    @local_admin = User.new params[:user]
    value = @local_admin.set_la_attributes
    @profile =@local_admin.build_profile params[:profile]
    if @local_admin.save && @profile.save
      #redirect_to root_path ,:notice => "Successfully created"
      LaMailer.welcome_email(@local_admin,@profile,value).deliver
      redirect_to root_path ,:notice => "Successfully created"
    else
      render :json => @local_admin.errors
    end
  end

  def all_users_globally
    @users = User.where(:role => "User").to_a
  end
  private
  def toggle_admin user
    user.role = user.role == "Local Admin" ? "Main Local Admin" : "Local Admin"
    user.save
  end
  def  should_be_GA
    if current_user.role != "Global Admin"
      redirect_to root_path, :notice => "sorry you are not able to perform this activity"
    end
  end
end
