class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :fatch_county_name

  def after_sign_in_path_for(resource)
    stored_location_for(resource) || root_path
  end

  def should_be_user
    redirect_to "/" unless current_user
  end


  def fatch_county_name user
    @geoip ||= GeoIP.new("#{Rails.root}/db/GeoIP.dat")
    remote_ip = user.last_sign_in_ip
    if remote_ip != "127.0.0.1" #todo: check for other local addresses or set default value
      location_location = @geoip.country(remote_ip)
      location_location.country_name if location_location != nil
    else
      "India"
    end

  end

  protected
  def get_user
    @user = current_user
  end

end
