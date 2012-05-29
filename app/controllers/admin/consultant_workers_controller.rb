class Admin::ConsultantWorkersController < ApplicationController
  before_filter :get_user


  def change_worker_to_consultant_worker
    @selected_user = User.find(params[:id])
    admin_group = current_user.get_admin_group
    @affillation_key = AffillationKey.new
    @affillation_key.save_affillation_key(@affillation_key.generate_affillation_key,admin_group.id)
    admin_group_consultant_worker = admin_group.admin_group_consultant_workers.build(:affillation_key_id=> @affillation_key.id,
                                                                                     :admin_group_id=> admin_group.id)
    consultant_worker = ConsultantWorker.create(:admin_group_consultant_worker_id=>admin_group_consultant_worker.id)
    admin_group_consultant_worker.update_attributes(:consultant_worker_id=>consultant_worker.id)
    @selected_user.update_attributes(:role=>"Consultant Worker")
    LaMailer.changed_role(@selected_user).deliver
    redirect_to :back, :notice => "Successfully Changed To CW"
  end
end
