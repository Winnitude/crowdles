class LaMailer < ActionMailer::Base
  default from: "from@example.com"
  def welcome_email(la,profile,value,la_setting)
    @la = la
    @url  = LOCAL_HOST
    @profile =profile
    @value = value
    @la_setting = la_setting
    mail(:to => @la.email, :subject => "Welcome to Crowd Funding Site")
  end

  def changed_role(user,role)
    @user = user
    @role = role
    mail(:to => @user.email, :subject => "Your role has been changed")
  end
end
