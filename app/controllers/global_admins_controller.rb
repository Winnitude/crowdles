class GlobalAdminsController < ApplicationController
  before_filter :should_be_GA
  #def new_local_admin
  #
  #end
  private
  def  should_be_GA
   if current_user.role != "Global Admin"
     redirect_to root_path, :notice => "sorry you are not able to perform this activity"
   end
  end
end
