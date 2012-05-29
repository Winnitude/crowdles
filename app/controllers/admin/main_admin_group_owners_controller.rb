class Admin::MainAdminGroupOwnersController < ApplicationController
  def related_ideas
    @ideas = Idea.get_MAGO_ideas(current_user)
    logger.info @ideas.inspect
  end
end
