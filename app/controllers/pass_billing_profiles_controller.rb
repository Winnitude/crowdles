class PassBillingProfilesController < ApplicationController
  autocomplete :country_detail, :name
  #autocomplete :user, :email
  autocomplete :language, :name
  before_filter :should_be_global_admin ,:only => [:edit]
  def edit
    @billing_profile = PlatformBillingProfile.find (params[:id])
    logger.info @billing_profile.inspect
  end

  def update
    @billing_profile = PlatformBillingProfile.find (params[:id])
    #NOTE the following code is to create the MAG for LA when GA create the LA

    if @billing_profile.update_attributes(params[:platform_billing_profile])
      @admin_group_owner = @billing_profile.la_setting.user
      @admin_group = @admin_group_owner.build_admin_group(:admin_group_type => "Master")
      @admin_group.set_group_attributes(@admin_group_owner.la_setting)
      @admin_group.la_setting = @billing_profile.la_setting
      @product = Product.where(:type => "Master").first
      @user_product = @admin_group_owner.user_products.new
      @user_product.product = @product
      @admin_group_owner.save && @admin_group.save  && @user_product.save
      @admin_group_owner.add_role "Main Admin Group Owner"
      redirect_to edit_main_admin_group_local_admin_path(@admin_group_owner) , :notice => "Updated Successfully"

    else
      render :action=> :edit
    end
   end


  def  should_be_global_admin
    unless RolesManager.is_role_present?("Global Admin", current_user)
      redirect_to root_path, :notice => "sorry you are not able to perform this activity"
    end
  end
end
