class DefaultBillingProfilesController < ApplicationController
  autocomplete :country_detail, :name
  #autocomplete :user, :email
  autocomplete :language, :name

  def new
    @profile = current_user.build_default_billing_profile
  end

  def create
    params[:default_billing_profile][:birth_date] = format_birth_date(params[:default_billing_profile][:birth_date])  if params[:default_billing_profile][:birth_date].present?
    @profile = current_user.build_default_billing_profile params[:default_billing_profile]
    if @profile.save
     redirect_to root_path ,:notice => "Billing Profile Created successfully"
    end

  end

  def edit
    @profile = current_user.default_billing_profile
  end

  def update
    params[:default_billing_profile][:birth_date] = format_birth_date(params[:default_billing_profile][:birth_date])  if params[:default_billing_profile][:birth_date].present?
    @profile = current_user.default_billing_profile
    if @profile.update_attributes(params[:default_billing_profile])
      redirect_to root_path ,:notice => "Billing Profile Updated successfully"
    end

  end
end
