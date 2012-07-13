class DefaultBillingProfilesController < ApplicationController

  def new
    @profile = current_user.build_default_billing_profile
  end

  def create
    @profile = current_user.build_default_billing_profile params[:default_billing_profile]
    if @profile.save
     redirect_to root_path ,:notice => "Billing Profile Created successfully"
    end

  end

  def edit

  end
end
