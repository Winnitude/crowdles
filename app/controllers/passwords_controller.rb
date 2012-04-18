class PasswordsController <  Devise::PasswordsController
  prepend_before_filter :require_no_authentication
#  include Devise::Controllers::InternalHelpers

  # GET /resource/password/new
  def new
    build_resource({})
    render_with_scope :new
  end

  # POST /resource/password
  def create
    self.resource = resource_class.send_reset_password_instructions(params[resource_name])
    if successful_and_sane?(resource)
      set_flash_message(:notice, :send_instructions) if is_navigational_format?
     redirect_to("/", :notice => "Reset Password Sent Successfully")
    else
    redirect_to("/", :notice => "Email not Found")
    end
  end

  # GET /resource/password/edit?reset_password_token=abcdef
  def edit
    self.resource = resource_class.new
    resource.reset_password_token = params[:reset_password_token]
    render_with_scope :edit
  end

  # PUT /resource/password
  def update
    self.resource = resource_class.reset_password_by_token(params[resource_name])

    if resource.errors.empty?
      set_flash_message(:notice, :updated) if is_navigational_format?
      sign_in(resource_name, resource)
      respond_with resource, :location => redirect_location(resource_name, resource)
    else
      respond_with_navigational(resource){ render_with_scope :edit }
    end
  end

  protected

    # The path used after sending reset password instructions
    def after_sending_reset_password_instructions_path_for(resource_name)
      new_session_path(resource_name)
    end

end
