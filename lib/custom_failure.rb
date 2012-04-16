class CustomFailure < Devise::FailureApp
  def respond
    if http_auth?
      http_auth
    elsif warden_options[:recall]
        recall
    else
      redirect
    end
  end

  def redirect
      store_location!
      flash[:alert] = i18n_message unless flash[:notice]
      redirect_to "/"
  end

  def recall
    env["PATH_INFO"] = attempted_path
    flash.now[:alert] = i18n_message(:invalid)
    self.response = recall_controller.action(warden_options[:recall]).call(env)
  end

  protected

  def i18n_message(default = nil)
    message = warden.message || warden_options[:message] || default || :unauthenticated

    if message.is_a?(Symbol)
      I18n.t(:"#{scope}.#{message}", :resource_name => scope,
             :scope => "devise.failure", :default => [message, message.to_s])
    else
      message.to_s
    end
  end

  def warden_options
    env['warden.options']
  end

  def warden
    env['warden']
  end

  def recall_controller
    "#{params[:controller].camelize}Controller".constantize
  end


  def attempted_path
    warden_options[:attempted_path]
  end

  def store_location!
    session[:"#{scope}_return_to"] = attempted_path if request.get? && !http_auth?
  end

  def attempted_path
    warden_options[:attempted_path]
  end

  def http_auth?
    !Devise.navigational_formats.include?(request_format) || (request.xhr? && Devise.http_authenticatable_on_xhr)
  end
end