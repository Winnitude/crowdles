class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
#    a = CGI::unescape(params[:code])
#    logger.info("=========================#{a.inspect}")
#    @user = User.find_for_facebook_oauth(env["omniauth.auth"], session[:email],  env["omniauth.auth"]["uid"],  env["omniauth.auth"]["user_info"]["image"] , current_user)
#    if @user.persisted?
#      sign_in_and_redirect @user, :event => :authentication
#    else
#      session["devise.facebook_data"] = env["omniauth.auth"]
#      redirect_to "/"
#    end
    logger.info request.env["omniauth.auth"]
    # You need to implement the method below in your model
    @user = User.find_for_facebook_oauth(request.env["omniauth.auth"],current_user)
     if !@user.nil?
      flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => "Facebook"
      sign_in_and_redirect @user, :event => :authentication
    else
      session["devise.facebook_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end
end
