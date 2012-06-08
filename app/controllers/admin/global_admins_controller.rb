class Admin::GlobalAdminsController < ApplicationController

  def all_admins
    ## @admins = User.all.select{|i| i.role == "Local Admin" || i.role == "Main Local Admin"}
    # @admins = User.all.select{|i| RolesManager.is_role_present?("Local Admin", i) || RolesManager.is_role_present?("Main Local Admin", i)}
    # #@is_any_main_local_admin = User.where(:role => "Main Local Admin" ).present?
    # @is_any_main_local_admin = User.get_all_user_for_selected_role "Main Local Admin"
    # logger.info "3333333333333#{@is_any_main_local_admin.inspect}"
    ##now new flow
    @admins = User.get_all_user_for_selected_role "Local Admin"
  end

  def ideas
    @ideas = Idea.all
  end

  def edit_general_sttings
    @global_admin = User.find(params[:id])
    @global_admin_general_setting = @global_admin.global_admin_general_setting || GlobalAdminGeneralSetting.new
  end

  def update_general_sttings
    @global_admin = User.find(params[:id])
    @global_admin_general_setting = @global_admin.global_admin_general_setting || @global_admin.build_global_admin_general_setting
    logger.info "##########{@global_admin_general_setting.inspect}########"
    if @global_admin_general_setting.update_attributes(params[:user][:global_admin_general_setting]) && @global_admin.update_attributes(params[:user])
      redirect_to edit_user_registration_path, :notice=>"Successfully Update"
    else
      render :edit_general_sttings
    end

    #@global_admin_general_setting.update_attributes(params)
    #@la_setting = @admin.la_setting || @admin.build_la_setting
    #if @admin.update_attributes(params[:user]) && @la_setting.update_attributes(params[:la_setting])
    #  redirect_to :root, :notice => "successfully_updated"
    #else
    #  render :edit_local_admin
    #end

  end
  #def all_main_admin_groups
  #  @groups = MainAdminGroup.all
  #  logger.info @groups.inspect
  #end

end



