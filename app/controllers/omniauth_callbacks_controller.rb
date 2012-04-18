class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
#    logger.info request.env["omniauth.auth"]
    # You need to implement the method below in your model
    @user = User.find_for_facebook_oauth(request.env["omniauth.auth"],current_user)
    if !@user.nil?
      flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => "Facebook"
      if @user.is_provider_terms_of_service
        sign_in_and_redirect(@user)
      else
        set_flash_message(:notice, :is_provider_terms_of_service)
        sign_in(@user)
        redirect_to provider_terms_of_service_people_path
      end
    else
      session["devise.facebook_data"] = request.env["omniauth.auth"]
      sign_in_and_redirect(@user)
      redirect_to new_user_registration_url
    end
  end
end
