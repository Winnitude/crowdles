class AgMailer < ActionMailer::Base
  default from: "from@example.com"

  def welcome_email(ag,profile,value,la_setting)
    @ag = ag
    @la_setting = la_setting
    @profile =profile
    @value = value
    mail(:to => @ag.email, :subject => "Welcome to Crowd Funding Site")
  end

  def welcome_email_existing_user(ag,la_setting)
    @la_setting = la_setting
    mail(:to => ag.email, :subject => "Welcome to Crowd Funding Site")
  end
end
