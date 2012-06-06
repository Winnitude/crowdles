class AdminGroupWorkersController < ApplicationController
  def new_admin_group_workers
    @admin_group = AdminGroup.find(params[:admin_group_owner_id])
    @admin_group_worker = @admin_group.admin_group_workers.new
  end

  def create_admin_group_worker

    logger.info "####????????####{params[:admin_group_owner_id].inspect}#############"
           logger.info "########{@admin_group.inspect}#############"
           logger.info "########{params.inspect}#############"
    #@selected_user = User.where(:email=>params[:email]).first
    #unless @selected_user.blank?
    #  @admin_group_worker.update_attributes(params[:admin_group_worker])
    #  @selected_user.create_admin_group_worker params[:admin_group_worker]
    #else
    #  new_user = User.new(:email=>params[:email],:country=>current_user.la_setting.la_country)
    #  value = new_user.set_la_attributes
    #  new_user.save
    #  LaMailer.welcome_email(new_user,new_user.profile,value,current_user.la_setting).deliver
    #  new_user.create_admin_group_worker params[:admin_group_worker]
    #end

    #redirect_to root_path ,:notice => "Successfully created"
  end
end
