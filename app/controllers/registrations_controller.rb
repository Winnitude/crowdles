class RegistrationsController < Devise::RegistrationsController
  before_filter :should_not_be_user, :only => [:new]
  def new
    super
  end
  def create


  end
  private

  def build_resource(*args)
    super
    if session[:omniauth]
      @user.apply_omniauth(session[:omniauth])
      @user.valid?
    end
  end

end
