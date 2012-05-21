class LocalAdminsController < ApplicationController
  before_filter :should_be_GA

  def show_local_admin
      @local_admins = User.where(:role => "Local Admin").to_a
  end

  def change_admin_role
    @user = User.find(params[:id])
    toggle_admin @user
    redirect_to local_admins_show_local_admin_path
  end

  def new_local_admin
    @la= User.new

  end

  def create_local_admin
   @la = User.new params[:user]
   value = @la.set_la_attributes
   @profile =@la.build_profile params[:profile]
   if @la.save && @profile.save
     #redirect_to root_path ,:notice => "Successfully created"
     LaMailer.welcome_email(@la,@profile,value).deliver
     redirect_to root_path ,:notice => "Successfully created"
   else
     render :json => @la.errors
   end
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
