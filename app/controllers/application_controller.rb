class ApplicationController < ActionController::Base
  protect_from_forgery

  def after_sign_in_path_for(resource)
    stored_location_for(resource) || root_path
  end

  def should_be_user
    redirect_to "/" unless current_user
  end


  protected
  def get_user
    @user = current_user
  end

end
