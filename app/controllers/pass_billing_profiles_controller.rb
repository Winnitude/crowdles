class PassBillingProfilesController < ApplicationController
  def edit
    @billing_profile = PlatformBillingProfile.find (params[:id])
    render :json => @billing_profile
  end
end
