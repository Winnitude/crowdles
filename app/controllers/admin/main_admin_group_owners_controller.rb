class Admin::MainAdminGroupOwnersController < ApplicationController
  before_filter :should_be_GA ,:only => [:index]

  def related_ideas
    @ideas = Idea.get_MAGO_ideas(current_user)
    logger.info @ideas.inspect
  end

  def index
    @groups = MainAdminGroup.includes(:user).all
  end

  def  should_be_GA       #TODO need to move to user model
    unless RolesManager.is_role_present?("Global Admin", current_user)
      redirect_to root_path, :notice => "sorry you are not able to perform this activity"
    end
  end
end
