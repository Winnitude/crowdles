class Admin::BusinessGroupsController < ApplicationController
  before_filter :should_be_admin_group_owner,:only=>[:create]
  def new

  end
  def create
    user = User.where(:_id =>params[:user_id]).to_a.first
    RolesManager.add_role("Business Group Owner",user)
    bussiness_group = user.build_business_group(params[:business_group])
    affillation_key = bussiness_group.build_affillation_key
    affillation_key.key = Digest::SHA1.hexdigest(Time.now.to_s)[0,15] #todo must move to after_create filter AK model
    if bussiness_group.save  && user.save && affillation_key.save
      logger.info bussiness_group.inspect
      UserMailer.notification_for_switching_to_worker(user).deliver
      redirect_to root_path ,:notice=>" successfully created "

    else
      redirect_to :back ,:notice=>"not created "
    end
  end

  def related_ideas
    business_group = current_user.get_business_group
    logger.info business_group.affillation_key.to_a.inspect
    @ideas = Idea.all.to_a.select{|i| i.affiliation_key == business_group.affillation_key.key}
    logger.info @ideas.inspect
  end

  def my_keys
    business_group = current_user.get_business_group
    @key = business_group.affillation_key.key
  end

  private

  def should_be_admin_group_owner
    redirect_to root_path, :notice => "You should have the AGO privileges to perform this action"  if RolesManager.is_role_present?("Admin Group Owner", current_user)
  end
end
