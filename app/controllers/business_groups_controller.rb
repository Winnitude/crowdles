class BusinessGroupsController < ApplicationController
  #before_filter :should_be_admin_group_owner,:only=>[:create]

  def all_workers
    #from this action I will move new_BG to create
    @workers = current_user.admin_group.admin_group_workers.includes(:user).collect{|i| i.user.email}
  end

  def new

  end

  def new_business_group
    @user = User.where(:email =>params[:worker_email]).first
    @business_group = @user.build_business_group(:affiliation_key => Digest::SHA1.hexdigest(Time.now.to_s)[0,15] )

  end
  def create
   @user = User.where(:email =>params[:email]).first
   @business_group = @user.build_business_group(params[:business_group])
   @business_group.admin_group = current_user.admin_group
    render :json => @business_group
  end


  private

  def should_be_admin_group_owner
    redirect_to root_path, :notice => "You should have the AGO privileges to perform this action"  if RolesManager.is_role_present?("Admin Group Owner", current_user)
  end
end
