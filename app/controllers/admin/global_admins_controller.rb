class Admin::GlobalAdminsController < ApplicationController
  before_filter :should_be_global_admin
  before_filter :should_not_be_fake_language, :only => [:update_general_settings]
  autocomplete :language, :name


  def all_admins
    ## @admins = User.all.select{|i| i.role == "Local Admin" || i.role == "Main Local Admin"}
    # @admins = User.all.select{|i| RolesManager.is_role_present?("Local Admin", i) || RolesManager.is_role_present?("Main Local Admin", i)}
    # #@is_any_main_local_admin = User.where(:role => "Main Local Admin" ).present?
    # @is_any_main_local_admin = User.get_all_user_for_selected_role "Main Local Admin"
    # logger.info "3333333333333#{@is_any_main_local_admin.inspect}"
    ##now new flow
    @admins = User.get_all_user_for_selected_role "Local Admin"
    #start_debugging
  end

  def ideas
    @ideas = Idea.all
  end

  def edit_general_settings
    @global_admin = User.find(params[:id])
    @global_admin_general_setting = @global_admin.global_admin_general_setting
  end

  def update_general_settings
    @global_admin = User.find(params[:id])
    #binding.remote_pry
    @global_admin_general_setting = @global_admin.global_admin_general_setting
    logger.info "##########{@global_admin_general_setting.inspect}########"
    if @global_admin_general_setting.update_attributes(params[:user][:global_admin_general_setting]) && @global_admin.update_attributes(params[:user])
      redirect_to :back, :notice=>"Successfully Update"
    else
      render :edit_general_settings
    end

    #@global_admin_general_setting.update_attributes(params)
    #@la_setting = @admin.la_setting || @admin.build_la_setting
    #if @admin.update_attributes(params[:user]) && @la_setting.update_attributes(params[:la_setting])
    #  redirect_to :root, :notice => "successfully_updated"
    #else
    #  render :edit_local_admin
    #end

  end

  def profile_setting
   @global_admin = current_user
   logger.info @global_admin.inspect
  end

  def edit_integration_setting
   @global_admin_general_setting = current_user.global_admin_general_setting
  end

  def update_integration_setting
    @global_admin_general_setting = current_user.global_admin_general_setting
   if  @global_admin_general_setting.update_attributes(params[:global_admin_general_setting])
      redirect_to profile_setting_global_admins_path, :notice => "Updated integration Setting"
   end

  end

  def slave_admin_group_mgmt
    @slave_admin_groups = AdminGroup.all.to_a
  end


  def main_admin_group_mgmt
    @main_admin_groups = MainAdminGroup.all.to_a
  end
  #def all_main_admin_groups
  #  @groups = MainAdminGroup.all
  #  logger.info @groups.inspect
  #end
  def  should_be_global_admin      #TODO need to move to user model
    unless RolesManager.is_role_present?("Global Admin", current_user)
      redirect_to root_path, :notice => "sorry you are not able to perform this activity"
    end
  end

  def should_not_be_fake_language
    if Language.is_fake ( params[:user][:global_admin_general_setting][:plateform_default_language])
      redirect_to :back , :notice => "Sorry the language you Have selected is not exist"
    end
  end
end



