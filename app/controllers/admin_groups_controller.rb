class AdminGroupsController < ApplicationController
  before_filter :should_be_AGO
  autocomplete :country_detail, :name
  #autocomplete :user, :email
  autocomplete :language, :name


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
    #@products = Product.where(:type => "Slave")
  end


  def update_admin_group
    @admin_group_owner = User.find params[:id]
    @admin_group = @admin_group_owner.admin_group
    if @admin_group.update_attributes(params[:admin_group])
      redirect_to edit_user_registration_path ,:notice => "Your Settings has been updated Successfully"
    else
      @profile = @admin_group_owner.profile
      @product = @admin_group_owner.user_products.first.product
      #@products = Product.where(:type => "Slave")
      redirect_to :action => :edit_admin_group
    end
  end
  def country_selection
    @countries = CountryDetail.all
  end
  #def all_users
  #  @countries = CountryDetail.all
  #  #for this method we need all the persons that have user role also they dont have LA role to them   also not to show all worker to that AG
  #  my_workers = current_user.admin_group.admin_group_workers.collect{|i| i.user}
  #  all_users = User.get_all_user_for_selected_role("User").select{|i| i.country == params[:country_name] && !(i.has_role("Local Admin"))}
  #  @users = (all_users - my_workers ).paginate(:page => params[:page], :per_page => 10)
  #end
  #
  #def create_worker
  #  ###need to check the unlimited part also
  #  total_allowed = (Product.get_product current_user).get_ag_workers_number
  #  admin_group = current_user.admin_group
  #  remaining = total_allowed - admin_group.admin_group_workers.size  if total_allowed != "unlimited"   # this will gives the remaining number of workers that this AG is allowed to have  calculating this by (total_allowed - current)\
  #  total_selected = 0
  #
  #  # checking how many users are selected ny AGO
  #  (0..9).each_with_index do |i|
  #    if params["value_#{i}".to_sym]=="1"
  #      total_selected = total_selected + 1
  #    end
  #  end
  #
  #  #  if total selected is zero the he can't create the worker
  #  if total_selected == 0
  #    redirect_to all_users_admin_groups_path, :notice => "please select a user"
  #  else
  #
  #    #if he can create unlimited AG then can create all
  #    if total_allowed == "unlimited"
  #      (0..2).each do |i|
  #        if params["value_#{i}".to_sym]=="1"
  #          user = User.find params["id_#{i}".to_sym]
  #          agw = user.admin_group_workers.new
  #          agw.admin_group = admin_group
  #          agw.save
  #          logger.info agw.inspect
  #        end
  #      end
  #      redirect_to all_users_admin_groups_path, :notice => "created"
  #    else
  #      if total_selected <= remaining
  #        (0..2).each do |i|
  #          if params["value_#{i}".to_sym]=="1"
  #            user = User.find params["id_#{i}".to_sym]
  #            agw = user.admin_group_workers.new
  #            agw.admin_group = admin_group
  #            agw.save
  #            logger.info agw.inspect
  #          end
  #        end
  #        redirect_to all_users_admin_groups_path, :notice => "created"
  #
  #      else
  #        redirect_to all_users_admin_groups_path, :notice => "cant create because you are allowed to create #{remaining} worker more "
  #      end
  #    end
  #  end
  #end

  #def sago_home
  #  @admin_group = AdminGroup.find(params[:id])
  #  @admin_group_workers = @admin_group.admin_group_workers
  #  #binding.pry_remote
  #end
  #
  #def all_workers
  #  @admin_group = AdminGroup.find(params[:id])
  #  @workers = @admin_group.admin_group_workers.includes(:user)
  #  #render :json => @admin_group_workers
  #end

  def show_main_admin_group
    @main_admin_group = MainAdminGroup.find(params[:id])
  end

  def edit_main_admin_group
    @admin_group_owner = User.find params[:id]
    #@la_setting = current_user.la_setting
    @profile = @admin_group_owner.profile
    @admin_group = @admin_group_owner.admin_group
    @product = @admin_group_owner.user_products.first.product
    #@products = Product.where(:type => "Mater")
  end

  def update_main_admin_group
    @admin_group_owner = User.find params[:id]
    @admin_group = @admin_group_owner.admin_group
    if @admin_group.update_attributes(params[:admin_group])
      redirect_to edit_user_registration_path ,:notice => "Your Settings has been updated Successfully"
    else
      @profile = @admin_group_owner.profile
      @product = @admin_group_owner.user_products.first.product
      #@products = Product.where(:type => "Master")
      redirect_to :action => :edit_main_admin_group
    end
  end

  def workers_management
    @workers = current_user.admin_group.admin_group_workers.includes(:user)
  end

  def business_group_management
    admin_group = current_user.admin_group
    @business_groups = admin_group.business_groups.includes(:user)
    #render :json => @business_groups
  end




  private

  def should_be_AGO
    redirect_to root_path, :notice => "You should have the AGO privileges to perform this action" if !(RolesManager.is_role_present?("Admin Group Owner", current_user))
  end
end
