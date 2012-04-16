class HomesController < ApplicationController
  before_filter :get_hominid ,:only => :persist_news_letter
  def index
  end

  def news_letter
  end

  def persist_news_letter
    @guest = GuestUser.new(params[:guest_user])
    logger.info @guest.email.inspect
    if @guest.save
      @hominid.list_subscribe(@hominid.find_list_by_name('crowd_funding_guest_list')['id'],@guest.email , {}, 'html', false, true, true, false)
      flash[:notice] = I18n.t "guest_user.success"
      redirect_to "/"
    end
  end

  def get_hominid
    logger.info"getting homind"
    @hominid= Hominid::API.new('bac75b91f1ef97391dfbbb0ab281a6a6-us4')
  end
end

