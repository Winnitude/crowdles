class AdminGroupsController < ApplicationController
  before_filter :should_be_AGO


  def show_admin_group
     @admin_group = AdminGroup.find(params[:id])
     @owner = @admin_group.user
     @profile = @owner.profile

  end

  def edit_admin_group
    @admin_group_owner = User.find params[:id]
    #@la_setting = current_user.la_setting
    @profile = @admin_group_owner.profile
    @admin_group = @admin_group_owner.admin_group
    @product = @admin_group_owner.user_products.first.product
    @products = Product.where(:type => "Slave")
  end



  def update_admin_group
    @admin_group_owner = User.find params[:id]
    @admin_group = @admin_group_owner.admin_group
    if @admin_group.update_attributes(params[:admin_group])
      redirect_to edit_user_registration_path ,:notice => "Your Settings has been updated Successfully"
    else
      @profile = @admin_group_owner.profile
      @product = @admin_group_owner.user_products.first.product
      @products = Product.where(:type => "Slave")
      redirect_to :action => :edit_admin_group
    end


  end



  def sago_home
    @admin_group = AdminGroup.find(params[:id])
    @admin_group_workers = @admin_group.admin_group_workers
    #binding.pry_remote
  end

  def all_workers
    @admin_group = AdminGroup.find(params[:id])
    @workers = @admin_group.admin_group_workers.includes(:user)
    #render :json => @admin_group_workers
  end

  def show_main_admin_group
    @main_admin_group = MainAdminGroup.find(params[:id])
  end

  def edit_main_admin_group
    @main_admin_group = MainAdminGroup.find(params[:id])
    @local_admin = current_user.la_setting
    @user = @main_admin_group.user || User.new
  end

  def update_main_admin_group
    @main_admin_group = MainAdminGroup.find(params[:id])
    @main_admin_group.update_attributes(params[:main_admin_group])
    redirect_to root_path   ,:notice => "Successfully Update"
  end

  private

  def should_be_AGO
    redirect_to root_path, :notice => "You should have the AGO privileges to perform this action" if !(RolesManager.is_role_present?("Admin Group Owner", current_user))
  end
end
