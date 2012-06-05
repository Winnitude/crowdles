class MainAdminGroupOwnersController < ApplicationController
  before_filter :should_be_GA ,:only => [:index]
  before_filter :should_be_LA ,:only => [:change_ownership]

  def related_ideas
    @ideas = Idea.get_MAGO_ideas(current_user)
    logger.info @ideas.inspect
  end

  def index
    @groups = MainAdminGroup.includes(:user).all
  end

  def change_ownership
    @group = MainAdminGroup.where(:country => current_user.la_setting.la_country)
    #@workers = (User.get_all_user_for_selected_role "Worker").map{|i| i.email}
    @users =   (User.get_all_user_for_selected_role "User").map{|i| i.email}
    logger.info @group.to_a.inspect
  end

  def changed
    group = MainAdminGroup.where(:country => current_user.la_setting.la_country).to_a.first
    user= User.where(:email => params[:worker_email]).to_a.first
    if user.present?
    existing_owner = group.user
    logger.info user.inspect
    group.user = user
    if group.save
      RolesManagement::RolesManager.remove_role("Main Admin Group", existing_owner)
      RolesManagement::RolesManager.add_role("Main Admin Group", user)
    redirect_to :root , :notice => "changed ownership successfully"
    end
    else
    redirect_to :root , :notice => "User not Found"
    end
  end

  def  should_be_GA       #TODO need to move to user model
    unless RolesManager.is_role_present?("Global Admin", current_user)
      redirect_to root_path, :notice => "sorry you are not able to perform this activity"
    end
  end

  def  should_be_LA       #TODO need to move to user model
    unless RolesManager.is_role_present?("Local Admin", current_user)
      redirect_to root_path, :notice => "sorry you are not able to perform this activity"
    end
  end
end
