class ConsultantWorkersController < ApplicationController
  before_filter :get_user

  #NOTE: this will change worker to consultant worker
  def change_worker_to_consultant_worker
    #@selected_user = User.find(params[:id])
    #admin_group = current_user.get_admin_group
    #@affillation_key = AffillationKey.new
    #@affillation_key.save_affillation_key(@affillation_key.generate_affillation_key,admin_group.id)
    #admin_group_consultant_worker = admin_group.admin_group_consultant_workers.build(:affillation_key_id=> @affillation_key.id,
    #                                                                                 :admin_group_id=> admin_group.id)
    #consultant_worker = ConsultantWorker.create(:admin_group_consultant_worker_id=>admin_group_consultant_worker.id)
    #admin_group_consultant_worker.update_attributes(:consultant_worker_id=>consultant_worker.id)
    #@selected_user.update_attributes(:role=>"Consultant Worker")
    #LaMailer.changed_role(@selected_user).deliver
    #redirect_to :back, :notice => "Successfully Changed To CW"
    @selected_user = User.find(params[:id])
    consultant_worker = @selected_user.build_consultant_worker
    admin_group = current_user.get_admin_group
    admin_group_consultant_worker=AdminGroupConsultantWorker.new
    admin_group_consultant_worker.admin_group = admin_group
    admin_group_consultant_worker.consultant_worker = consultant_worker
    affillation_key = admin_group_consultant_worker.build_affillation_key
    affillation_key.generate_key
   # @selected_user.update_attributes(:role=>"Consultant Worker")
    RolesManager.add_role("Consultant Worker",@selected_user)

    #logger.info "admin group#######{admin_group.to_a.inspect}"
    #logger.info "admin groupcw#######{admin_group_consultant_worker.to_a.inspect}"
    #logger.info "aaaaaaaaaaakkkkkkkkkkkkkkkkk#######{affillation_key.to_a.inspect}"
    #logger.info "workerrrrrrrrr#{consultant_worker.to_a.inspect}"
    if affillation_key.save && consultant_worker.save && admin_group_consultant_worker.save
      LaMailer.changed_role(@selected_user,"Consultant Worker Controller").deliver
      redirect_to :back, :notice => "Successfully Changed To CW"
    else
      redirect_to :back, :notice => "failure"
    end
  end
end
