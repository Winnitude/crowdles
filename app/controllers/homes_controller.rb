class HomesController < ApplicationController
  before_filter :get_hominid ,:only => [:persist_news_letter, :send_news_letter_page, :get_campaigns, :send_news_letter]
  def index
  end

  def news_letter
  end

  def persist_news_letter
    @guest = GuestUser.new(params[:guest_user])
    if @guest.save
      @hominid.list_subscribe(@hominid.find_list_by_name('crowd_funding_guest_list')['id'],@guest.email , {}, 'html', false, true, true, false)
      flash[:notice] = I18n.t "guest_user.success"
      redirect_to "/"
    end
  end


  def send_news_letter_page
    @lists = @hominid.lists
    @lists_name = Array.new
    @lists['data'].each_with_index do |i,j|
      @lists_name[j] = i["name"]
    end
  end
  def send_news_letter
    content = Hash.new
    content['html'] = ""
    content['text'] = "hi"

    type = 'regular'
    opts = 	Hash.new
    opts['subject'] = params[:subject]
    opts['from_email'] = params[:from_email]
    opts['from_name'] = params[:from_name]
    opts['to_name'] = params[:to_name]
    begin
      opts['list_id'] = @hominid.find_list_id_by_name(params[:lists])
      logger.info  opts['list_id'].inspect
      template= @hominid.template_add(params[:template_name],params[:template_content])
      logger.info  template.inspect
      opts['template_id']= template
      campaign = @hominid.campaign_create(type,opts,content)
      @hominid.campaign_send_now(campaign)
    rescue
      template = nil
    end
    logger.info  opts['list_id'].inspect
    logger.info  template.inspect
    if template == nil
      @status = "Campaign not send because you have given invalid name to Template your template name should be unique and should be almost 50 characters long"
    else
       @status = "Send SuccessFully"
    end
 end

#  def get_campaigns #######now no need of this method
#    campaigns = @hominid.find_campaigns_by_list_name(params[:list])
#    index = 0
#    @campaigns_title = Array.new
#    campaigns.each do |i|
#      if i['status'] == "save"
#        @campaigns_title[index] = i['title']
#        index = index + 1
#      end
#    end
#    respond_to do |format|
#      format.js{ render :layout => false}
#    end
#  end

  def get_hominid
    @hominid= Hominid::API.new('bac75b91f1ef97391dfbbb0ab281a6a6-us4')
  end
end

