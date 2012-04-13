class HomesController < ApplicationController
  def index
  end

  def news_letter
  end

  def persist_news_letter
    @guest = GuestUser.new(params[:guest_user])
    if @guest.save
      flash[:notice] = I18n.t "guest_user.success"
      redirect_to "/"
    end
  end

end
