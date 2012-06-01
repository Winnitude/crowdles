class ApplicationController < ActionController::Base
  protect_from_forgery
  require 'roles_management.rb'
  include RolesManagement
  #include RolesManagement::RolesManager
  helper_method :fetch_county_name

  def after_sign_in_path_for(resource)
    stored_location_for(resource) || root_path
  end

  def should_be_user
    redirect_to "/" unless current_user
  end


  def fetch_county_name user
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

  def format_birth_date birthdate
    birthdate_array= birthdate.split("/")
    if birthdate_array.size== 1
      birthdate_array= birthdate.split("-")
      return birthdate_array[2] +"-#{birthdate_array[1]}"+"-#{birthdate_array[0]}"
    else
      return birthdate_array[1] +"-#{birthdate_array[0]}"+"-#{birthdate_array[2]}"
    end

  end

  def toggle_user user
    user.suspended = user.suspended ? false : true
    user.save
  end

  def change_idea_status idea_obj
    idea_obj.type = (idea_obj.type == "Idea")? "Good idea" : (idea_obj.type == "Good idea")? "Project" : "Project"
    idea_obj.save
  end

  def canceled_user user
    user.canceled = user.canceled ? false : true
    user.save
  end
end
