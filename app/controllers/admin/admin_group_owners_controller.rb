class Admin::AdminGroupOwnersController < ApplicationController
  before_filter :should_be_AGO ,:only => [:view_all_workers]

  def view_all_workers
    @workers = User.where(:role => "Worker").to_a
  end

  private

  def should_be_AGO
    redirect_to root_path, :notice => "You should have the AGO privileges to perform this action"   if current_user.role != "Admin Group Owner"
  end
end
