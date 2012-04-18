class PeopleController < ApplicationController
  before_filter :should_be_user
  before_filter :get_user

  def new

  end

  def create

  end

  def show

  end

  def edit

  end

  def update

  end

  def provider_terms_of_service
    logger.info "inside #################{current_user}"
  end

  def update_provider_terms_of_service
    logger.info "inside ################# provider_terms_of_service"
    if @user.update_attributes(params[:user])
      redirect_to "/", :notice => "Updated Successfully."
    else
      redirect_to "/", :notice => "Unsuccessful"
    end
  end

  protected
  def get_user
    @user = current_user
  end

end
