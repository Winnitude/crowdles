class PassBillingProfilesController < ApplicationController
  before_filter :should_be_global_admin ,:only => [:edit]
  def edit
    @billing_profile = PlatformBillingProfile.find (params[:id])
    logger.info @billing_profile.inspect
  end

  def update
    @billing_profile = PlatformBillingProfile.find (params[:id])
   if @billing_profile.update_attributes(params[:platform_billing_profile])
     redirect_to root_path , :notice => "Updated Successfully"
   end

  end

  def  should_be_global_admin
    unless RolesManager.is_role_present?("Global Admin", current_user)
      redirect_to root_path, :notice => "sorry you are not able to perform this activity"
    end
  end
end
