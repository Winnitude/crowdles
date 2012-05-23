class LaMailer < ActionMailer::Base
  default from: "from@example.com"
  def welcome_email(la,profile,value)
    @la = la
    @url  = LOCAL_HOST
    @profile =profile
    @value = value
    mail(:to => @la.email, :subject => "Welcome to Crowd Funding Site")
  end

  def changed_role(user)
    @user = user
    mail(:to => @user.email, :subject => "Your role has been chnaged")
  end
end
