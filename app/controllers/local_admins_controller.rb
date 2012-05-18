class LocalAdminsController < ApplicationController
  def show_local_admin
      @local_admins = User.where(:role => "Local Admin").to_a
  end

  def change_admin_role
    @user = User.find(params[:id])
    toggle_admin @user
    redirect_to local_admins_show_local_admin_path
  end

  private
  def toggle_admin user
    user.role = user.role == "Local Admin" ? "Main Local Admin" : "Local Admin"
    user.save
  end
end
