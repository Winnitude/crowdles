class RegistrationsController <  Devise::RegistrationsController
  before_filter :redirect_if_already_exist ,:only=>[:create]
  before_filter :redirect_to_home , :only => [:new]
  autocomplete :country_detail, :name

  def create_LA
    build_resource

    if resource.save
      if resource.active_for_authentication?
        set_flash_message :notice, :signed_up if is_navigational_format?
        sign_in(resource_name, resource)
        respond_with resource, :location => after_sign_up_path_for(resource)
      else
        set_flash_message :notice, :"signed_up_but_#{resource.inactive_message}" if is_navigational_format?
        expire_session_data_after_sign_in!
        respond_with resource, :location => after_inactive_sign_up_path_for(resource)
      end
    else
      clean_up_passwords resource
      respond_with resource
    end
  end


  private

  def redirect_if_already_exist
    check_user = User.where(:email=>params[:user][:email]).to_a.first
    if !check_user.nil?
      if !check_user.confirmation_token.nil?
        redirect_to :controller => 'homes', :action => 'show_error_msg', :id =>check_user.id
      end
    end
  end

  def redirect_to_home
   if  check_is_admin_host_present?
     redirect_to root_path
   end

  end
end
