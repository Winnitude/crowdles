class AdminGroupWorkersController < ApplicationController
  def new
    @admin_group = AdminGroup.find(params[:admin_group_owner_id])

  end

  def create

  end
end
