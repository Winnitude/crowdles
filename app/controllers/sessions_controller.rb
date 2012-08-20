class SessionsController <  Devise::SessionsController

  prepend_before_filter :require_no_authentication, :only => [ :new, :create ]
  prepend_before_filter :allow_params_authentication!, :only => :create
  autocomplete :country_detail, :name
  # GET /resource/sign_in
  def new
    resource = build_resource(:unsafe => true)
    clean_up_passwords(resource)
    respond_with(resource, serialize_options(resource))
  end

  # POST /resource/sign_in
  def create
    #binding.remote_pry
    self.resource = warden.authenticate!(auth_options)
    logger.info "#########################session"
    logger.info "#########################{resource.inspect}"
    logger.info "#########################{resource_name.inspect}"
    if resource.is_provider_terms_of_service
      if check_weather_stop_login_from_admin_panel(resource)

        redirect_to logout_path(:error=> "error")

      else
       set_flash_message(:notice, :signed_in) if is_navigational_format?
        sign_in_and_redirect(resource_name ,resource)
      end
    else
      set_flash_message(:notice, :is_provider_terms_of_service)
      sign_in(resource_name ,resource)
      redirect_to provider_terms_of_service_people_path
    end
  end

  # DELETE /resource/sign_out
  def destroy
    redirect_path = after_sign_out_path_for(resource_name)
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    set_flash_message :notice, :signed_out if signed_out

    # We actually need to hardcode this as Rails default responder doesn't
    # support returning empty response on GET request
    respond_to do |format|
      format.any(*navigational_formats) { redirect_to redirect_path }
      format.all do
        method = "to_#{request_format}"
        text = {}.respond_to?(method) ? {}.send(method) : ""
        render :text => text, :status => :ok
      end
    end
  end

  def activate_page
    @user = User.find(params[:id])
    if @user.activate_via_new_path
      redirect_to root_path ,:notice => "already a registered user"
    end
  end

  def activation
    @user = User.find(params[:id])
    if @user.update_attributes(params[:user])
      @user.activate_via_new_path = true
      @user.save
      #sign_in @user
      redirect_to root_path , :notice => "Now you are the registered user. you can now sign_in and access crowdles"
    else
      render :action => :activate_page
    end

  end

  protected

  def serialize_options(resource)
    methods = resource_class.authentication_keys.dup
    methods = methods.keys if methods.is_a?(Hash)
    methods << :password if resource.respond_to?(:password)
    { :methods => methods, :only => [:password] }
  end

  def auth_options
    { :scope => resource_name, :recall => "#{controller_path}#new" }
  end
end
