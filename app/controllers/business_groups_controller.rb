class BusinessGroupsController < ApplicationController
  #before_filter :should_be_admin_group_owner,:only=>[:create]

  def all_workers
    #from this action I will move new_BG to create
    admin_group = current_user.admin_group
    all_workers = admin_group.admin_group_workers.includes(:user).collect{|i| i.user.email}
    my_bussiness_groups = admin_group.business_groups.includes(:user).collect{|i| i.user.email}
    @workers = all_workers - my_bussiness_groups
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
   @business_group.save
    #render :json => @business_group
    redirect_to bg_external_links_business_group_path(@business_group) , :notice => "Bussiness group general setting created"
  end

  def bg_external_links
    @business_group = BusinessGroup.find(params[:id])
  end

  def update_bg_external_links
    @business_group = BusinessGroup.find(params[:id])
    if @business_group.update_attributes(params[:business_group])
      redirect_to bg_location_business_group_path(@business_group) , :notice => "all links saved sucessfully"
    else
      render :action => :bg_external_links
    end

  end

  def bg_location
    @business_group = BusinessGroup.find(params[:id])
  end

  def update_bg_location
    @business_group = BusinessGroup.find(params[:id])
    if @business_group.update_attributes(params[:business_group])
      render :json => @business_group
    else
      render :action => :bg_location
    end
  end

  def bg_commissions_and_configurations

  end

  def update_bg_commissions_and_configurations

  end

  private

  def should_be_admin_group_owner
    redirect_to root_path, :notice => "You should have the AGO privileges to perform this action"  if RolesManager.is_role_present?("Admin Group Owner", current_user)
  end
end
