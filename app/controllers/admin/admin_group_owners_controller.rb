class Admin::AdminGroupOwnersController < ApplicationController
  before_filter :should_be_AGO ,:only => [:view_all_workers, :all_my_admin_group_workers]

  #NOTE:ago this will return all the workers  so that ago  can select them to make agw
  def view_all_workers
    @workers = User.where(:role => "Worker").to_a
  end

  #NOTE:ago this will return all the AGWs  so that ago  can select them to make BGO
  def all_my_admin_group_workers
    #@admin_group_workers = User.where(:role=> "Admin Group Worker").where(:agw_ago_id => current_user._id)
    #logger.info @admin_group_workers.to_a.inspect
    #logger.info @admin_group_workers.length.inspect
    admin_group = current_user.get_admin_group
    @admin_group_workers = admin_group.admin_group_workers.to_a.select{|i| i.user if i.user.present? && i.user.role == "Admin Group Worker" }
    logger.info @admin_group_workers.inspect
  end

  #NOTE:ago this will return all the ideas on which ago is supposed to take action
  def related_ideas
    admin_group = current_user.get_admin_group
    #logger.info admin_group.affillation_key.to_a.inspect
    #@ideas = Idea.all.to_a.select{|i| i.affiliation_key == admin_group.affillation_key.key}
    #logger.info @ideas.inspect
    all_related_keys = admin_group.all_related_keys   #NOTE this method will return all the keys which are related to this admin group. All keys will include the AK belongs to that AG and all the keys of its CW
    @ideas = Idea.all.to_a.select{|i| all_related_keys.include?(i.affiliation_key)}
  end

  private

  def should_be_AGO
    redirect_to root_path, :notice => "You should have the AGO privileges to perform this action" if current_user.role != "Admin Group Owner"
  end
end
