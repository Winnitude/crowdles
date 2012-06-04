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

end



