class ProfilesController < ApplicationController
  before_filter :get_user
#  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found
  def new
    @profile = Profile.new
#    @profile.inspect
  end
  def create
    profile = @user.build_profile(params[:profile])
    logger.info "##########################{profile.inspect}"
     if profile.save
       redirect_to root_path ,:notice => "profile created successfully"
     else
       render :new
     end
  end
  def edit
    @profile = current_user.profile
  end
  def update
    @profile = current_user.profile
   if @profile.update_attributes(params[:profile])
     redirect_to root_path ,:notice => "profile updated successfully"
   end
  end

  protected
  def get_user
    @user = current_user
  end
#  def record_not_found
#    flash[:error] = 'The team you requested could not be found.'
#  end
end
