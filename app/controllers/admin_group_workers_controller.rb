class AdminGroupWorkersController < ApplicationController
  before_filter :check_role_before_creation
  def new
    @user = User.new
  end

  def create
    #TODO need to check for GA LA and current_person
    @user = User.where(:email => params[:user][:email]).first.present? ? User.where(:email => params[:user][:email]).first : User.new(params[:user])
    is_new =  @user.new_record
    total_allowed = (Product.get_product current_user).get_ag_workers_number
    admin_group = current_user.admin_group
    if !(admin_group.check_weather_the_given_user_is_my_worker_or_not?(@user))

      remaining = total_allowed - admin_group.admin_group_workers.size  if total_allowed != "unlimited"
      remaining =  1   if total_allowed == "unlimited"
      if remaining > 0
        agw = @user.admin_group_workers.new
        agw.admin_group = admin_group
        if is_new
          @user.is_provider_terms_of_service= true
          @user.terms_of_service = true
          @user.skip_confirmation!
        end
        if @user.save && agw.save
          if is_new
            Activation.welcome_email(@user).deliver
            Worker.assign_worker(@user).deliver
          else
            Worker.assign_worker(@user).deliver
          end
          redirect_to new_admin_group_worker_path , :notice=> "worker created"
        else
          redirect_to new_admin_group_worker_path
        end
      else
        redirect_to new_admin_group_worker_path  , :notice => "cant create because you are allowed to create #{remaining} worker more "
      end
    else
      redirect_to new_admin_group_worker_path  , :notice => "This user is already your worker "
    end
  end

  def activate_or_deactivate_worker
    worker = AdminGroupWorker.find params[:id]
    worker.status = worker.status == "Active" ? "Deactive" : "Active"
    worker.save
    redirect_to workers_management_admin_groups_path ,:notice => "Changed Status"
  end

  def check_role_before_creation
    #TODO GA LA check
  end
end
