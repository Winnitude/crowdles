class BusinessGroupsController < ApplicationController
  before_filter :should_be_admin_group_owner , :except => ["all_owned_groups" , "edit_ak", "update_ak", "edit_publish", "update_publish"]
  before_filter :should_be_business_group_owner , :only => ["all_owned_groups" , "edit_ak", "update_ak","edit_publish", "update_publish"]
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
    @business_group = @user.build_business_group()
  end
  def create
    @user = current_user
    #@user = User.where(:email =>params[:email]).first
    @business_group = @user.build_business_group(params[:business_group])
    @business_group.admin_group = current_user.admin_group
    @business_group.bg_url =@business_group.bg_name + ".crowdles.com"
    @business_group.set_ak
    if @business_group.save
      @user.add_role("Business Group Owner")
      redirect_to bg_publication_settings_business_group_path(@business_group) , :notice => "Business group general setting created"
    else
      render :action => :new_business_group
    end
  end


  def bg_publication_settings
    @business_group = BusinessGroup.find(params[:id])
  end

  def update_bg_publication_settings
    params[:business_group][:publish_date] = format_birth_date(params[:business_group][:publish_date])  if  params[:business_group][:publish_date].present?
    params[:business_group][:unpublished_date] = format_birth_date(params[:business_group][:unpublished_date])  if  params[:business_group][:unpublished_date].present?

    @business_group = BusinessGroup.find(params[:id])
    if @business_group.update_attributes(params[:business_group])
      redirect_to team_and_projects_setting_business_group_path(@business_group) , :notice => "all links saved successfully" if !(params[:check_status].present?)
      redirect_to business_group_management_admin_groups_path, :notice => "all links saved successfully"    if (params[:check_status].present?)
    else
      render :action => :bg_external_links
    end
  end

  def team_and_projects_setting
    admin_group = current_user.admin_group
    #all_workers = admin_group.admin_group_workers.includes(:user).collect{|i| i.user.email}
    #my_business_groups = admin_group.business_groups.includes(:user).collect{|i| i.user.email}
    @workers = admin_group.admin_group_workers.includes(:user).collect{|i| i.user.email}
    @business_group = BusinessGroup.find(params[:id])
  end

  def update_team_and_projects_setting
    @business_group = BusinessGroup.find(params[:id])
    if @business_group.update_attributes!(params[:business_group])
      previous_owner = @business_group.user
      new_owner =  @user = User.where(:email =>params[:worker_email]).first
      if new_owner.present?
        previous_owner.remove_role "Business Group Owner" if previous_owner.business_groups.count == 1
        new_owner.add_role "Business Group Owner"
        @business_group.user = new_owner
        @business_group.save
        BgMailer.get_ownership(new_owner).deliver
        BgMailer.lost_ownership(previous_owner).deliver
      end
      redirect_to  bg_external_links_business_group_path(@business_group) , :notice => "BG Updated successfully "   if !(params[:check_status].present?)
      redirect_to business_group_management_admin_groups_path, :notice => "all links saved successfully"    if (params[:check_status].present?)
    end
  end

  def bg_external_links
    @business_group = BusinessGroup.find(params[:id])
  end

  def update_bg_external_links
    @business_group = BusinessGroup.find(params[:id])
    if @business_group.update_attributes(params[:business_group])
      redirect_to bg_location_business_group_path(@business_group) , :notice => "all links saved successfully"   if !(params[:check_status].present?)
      redirect_to business_group_management_admin_groups_path, :notice => "all links saved successfully"    if (params[:check_status].present?)
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
      redirect_to bg_description_business_group_path(@business_group)  ,:notice => "BG location saved successfully"  if !(params[:check_status].present?)
      redirect_to business_group_management_admin_groups_path, :notice => "all links saved successfully"    if (params[:check_status].present?)
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
      redirect_to bg_multimedia_business_group_path(@business_group) , :notice => "BG description saved successfully"   if !(params[:check_status].present?)
      redirect_to business_group_management_admin_groups_path, :notice => "all links saved successfully"    if (params[:check_status].present?)
    else
      render :action => :bg_external_links
    end
  end


  def bg_multimedia
    @business_group = BusinessGroup.find(params[:id])
  end

  def update_bg_multimedia
    @business_group = BusinessGroup.find(params[:id])
    if @business_group.update_attributes(params[:business_group])
      redirect_to  business_group_management_admin_groups_path , :notice => "BG multimedia settings updated successfully"
    else
      render :action => :bg_external_links
    end
  end

  def bg_general_setting
    @business_group = BusinessGroup.find(params[:id])
  end

  def update_bg_general_setting
    @business_group = BusinessGroup.find(params[:id])
    if @business_group.update_attributes(params[:business_group])
      redirect_to  business_group_management_admin_groups_path , :notice => "BG updated successfully"
    else
      render :action => :bg_general_setting
    end
  end
  def change_owner
    @business_group = BusinessGroup.find(params[:id])
    previous_owner = @business_group.user
    new_owner =  @user = User.where(:email =>params[:worker_email]).first
    previous_owner.remove_role "Business Group Owner"
    BgMailer.lost_ownership(previous_owner).deliver
    new_owner.add_role "Business Group Owner"
    BgMailer.get_ownership(new_owner).deliver
    @business_group.user = new_owner
    @business_group.save
    redirect_to business_group_management_admin_groups_path, :notice => "OwnerShip Changed"
  end

  def select_worker_change_owner
    @business_group = BusinessGroup.find(params[:id])
    admin_group = current_user.admin_group
    owner = @business_group.user.email
    #all_workers = admin_group.admin_group_workers.includes(:user).collect{|i| i.user.email}
    #my_business_groups = admin_group.business_groups.includes(:user).collect{|i| i.user.email}
    @workers = admin_group.admin_group_workers.includes(:user).collect{|i| i.user.email}
    @workers = @workers - owner.to_a  # subtracting the current owner of this bg
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

  def all_owned_groups
    @business_groups = current_user.business_groups.includes(:user)
  end

  def edit_ak   #BGO
    @business_group = BusinessGroup.find(params[:id])
  end

  def update_ak  #BGO
    @business_group = BusinessGroup.find(params[:id])
    if @business_group.update_attributes(params[:business_group])
      redirect_to all_owned_groups_business_groups_path , :notice => "AK updated sucessfully"
    else
      render :action => :edit_ak
    end
  end

  def edit_publish
    @business_group = BusinessGroup.find(params[:id])
    #render :json => @business_group
  end

  def update_publish
    params[:business_group][:publish_date] = format_birth_date(params[:business_group][:publish_date])  if  params[:business_group][:publish_date].present?
    params[:business_group][:unpublished_date] = format_birth_date(params[:business_group][:unpublished_date])  if  params[:business_group][:unpublished_date].present?
    @business_group = BusinessGroup.find(params[:id])
    if @business_group.update_attributes(params[:business_group])
      redirect_to all_owned_groups_business_groups_path , :notice => "Publish setting updated successfully"
    else
      render :action => :edit_ak
    end
  end

  private

  def should_be_admin_group_owner
    redirect_to root_path, :notice => "You should have the AGO privileges to perform this action"  unless RolesManager.is_role_present?("Admin Group Owner", current_user)
  end

  def should_be_business_group_owner
    redirect_to root_path, :notice => "You should have the BGO privileges to perform this action"  unless RolesManager.is_role_present?("Business Group Owner", current_user)
  end
end
