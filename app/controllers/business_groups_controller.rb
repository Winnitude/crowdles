class BusinessGroupsController < ApplicationController
  #before_filter :should_be_admin_group_owner,:only=>[:create]
  autocomplete :country_detail, :name
  #autocomplete :user, :email
  autocomplete :language, :name

  def all_workers
    #from this action I will move new_BG to create
    admin_group = current_user.admin_group
    all_workers = admin_group.admin_group_workers.includes(:user).collect{|i| i.user.email}
    my_business_groups = admin_group.business_groups.includes(:user).collect{|i| i.user.email}
    @workers = all_workers - my_business_groups
  end

  def new

  end

  def new_business_group
    #@user = User.where(:email =>params[:worker_email]).first
    @user = current_user
    @business_group = @user.build_business_group(:affiliation_key => Digest::SHA1.hexdigest(Time.now.to_s)[0,15] )


  end
  def create
    @user = current_user
   #@user = User.where(:email =>params[:email]).first
   @business_group = @user.build_business_group(params[:business_group])
   @business_group.admin_group = current_user.admin_group
   @business_group.bg_url =@business_group.bg_name + ".crowdles.com"
   @business_group.save
   @user.add_role("Business Group Owner")
    #render :json => @business_group
    redirect_to bg_publication_settings_business_group_path(@business_group) , :notice => "Business group general setting created"
  end


  def bg_publication_settings
    @business_group = BusinessGroup.find(params[:id])
  end

  def update_bg_publication_settings
    @business_group = BusinessGroup.find(params[:id])
    if @business_group.update_attributes(params[:business_group])
      redirect_to team_and_projects_setting_business_group_path(@business_group) , :notice => "all links saved successfully"
    else
      render :action => :bg_external_links
    end
  end

  def team_and_projects_setting
    admin_group = current_user.admin_group
    all_workers = admin_group.admin_group_workers.includes(:user).collect{|i| i.user.email}
    my_business_groups = admin_group.business_groups.includes(:user).collect{|i| i.user.email}
    @workers = all_workers - my_business_groups
    @business_group = BusinessGroup.find(params[:id])
  end

  def update_team_and_projects_setting
    @business_group = BusinessGroup.find(params[:id])
    if @business_group.update_attributes!(params[:business_group])
      previous_owner = @business_group.user
      new_owner =  @user = User.where(:email =>params[:worker_email]).first
      if new_owner.present?
      previous_owner.remove_role "Business Group Owner"
      new_owner.add_role "Business Group Owner"
      @business_group.user = new_owner
      @business_group.save
      BgMailer.get_ownership(new_owner).deliver
      BgMailer.lost_ownership(previous_owner).deliver
      end
      redirect_to  bg_external_links_business_group_path(@business_group) , :notice => "BG Updated successfully "
    end
  end

  def bg_external_links
    @business_group = BusinessGroup.find(params[:id])
  end

  def update_bg_external_links
    @business_group = BusinessGroup.find(params[:id])
    if @business_group.update_attributes(params[:business_group])
      redirect_to bg_location_business_group_path(@business_group) , :notice => "all links saved successfully"
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
      redirect_to bg_description_business_group_path(@business_group)  ,:notice => "BG location saved successfully"
    else
      render :action => :bg_location
    end
  end

  def bg_description
    @business_group = BusinessGroup.find(params[:id])
  end

  def update_bg_description
    @business_group = BusinessGroup.find(params[:id])
    if @business_group.update_attributes(params[:business_group])
      redirect_to bg_multimedia_business_group_path(@business_group) , :notice => "BG description saved successfully"
    else
      render :action => :bg_external_links
    end
  end


  def bg_multimedia
    @business_group = BusinessGroup.find(params[:id])
  end

  def update_bg_multimedia

  end
  def change_owner
    @business_group = BusinessGroup.find(params[:id])
    previous_owner = @business_group.user
    new_owner =  @user = User.where(:email =>params[:worker_email]).first
    previous_owner.remove_role "Business Group Owner"
    new_owner.add_role "Business Group Owner"
    @business_group.user = new_owner
    @business_group.save
    BgMailer.get_ownership(new_owner).deliver
    BgMailer.lost_ownership(previous_owner).deliver
    redirect_to business_group_management_admin_groups_path, :notice => "OwnerShip Changed"
  end

  def select_worker_change_owner
    @business_group = BusinessGroup.find(params[:id])
    admin_group = current_user.admin_group
    all_workers = admin_group.admin_group_workers.includes(:user).collect{|i| i.user.email}
    my_business_groups = admin_group.business_groups.includes(:user).collect{|i| i.user.email}
    @workers = all_workers - my_business_groups
  end

  def reset_projects_visibility
    business_group = BusinessGroup.find(params[:id])
    business_group.toggle_projects_visibility
    redirect_to business_group_management_admin_groups_path, :notice => "Projects Visibility Setting Changed"
  end

  def reset_group_visibility
    business_group = BusinessGroup.find(params[:id])
    business_group.toggle_group_visibility
    redirect_to business_group_management_admin_groups_path, :notice => "Group Visibility Setting Changed"
  end

  private

  def should_be_admin_group_owner
    redirect_to root_path, :notice => "You should have the AGO privileges to perform this action"  if RolesManager.is_role_present?("Admin Group Owner", current_user)
  end
end
