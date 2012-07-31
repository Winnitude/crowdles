class AdminGroupWorkersController < ApplicationController
  def new
    @user = User.new

  end

  def create
    @user = User.new(params[:user])
    @user.is_provider_terms_of_service= true
    @user.terms_of_service = true
    @user.skip_confirmation!
    #@user.reset_password_token= User.reset_password_token
    #@user.confirmation_token = User.confirmation_token
    @user.save
    Activation.welcome_email(@user).deliver
  end

end
