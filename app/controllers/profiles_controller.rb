class ProfilesController < ApplicationController
  def new
    @profile = current_user.build_profile
  end
  def create
    profile = current_user.build_profile(params[:profile])
    logger.info "##########################{profile.inspect}"
    profile.save
  end
  def edit
    @profile = current_user.profile
  end
  def update
    @profile = current_user.profile
    @profile.update_attributes(params[:profile])
  end
end
