class AdminGroupWorkersController < ApplicationController
  def new_admin_group_workers

    @admin_group = AdminGroup.find(params[:admin_group_owner_id])
    #binding.remote_pry
    @users =   (User.get_all_user_for_selected_role "User").map{|i| i.email} - @admin_group.get_all_my_admin_group_workers.map{|i| i.email}
    #@admin_group_worker = @admin_group.admin_group_workers.new
  end

  def create_admin_group_worker
    @admin_group = AdminGroup.find(params[:admin_group_owner_id])
    @admin_group_worker = @admin_group.admin_group_workers.new(params[:admin_group_worker])
    @user = User.where(:email => params[:worker_email]).first
    if @user.present?
      @admin_group_worker.user = @user
      RolesManager.add_role("Admin Group Worker",@user)
      @admin_group_worker.save
      LaMailer.changed_role(@user,"Admin Group Owner").deliver
      redirect_to root_path ,:notice => "Successfully created"
    else
      redirect_to :back, :notice => "User not found"
    end
  end
end
