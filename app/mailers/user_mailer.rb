class UserMailer < ActionMailer::Base
  default from: "from@example.com"
  def welcome_email(user)
    @user = user
    @url  = LOCAL_HOST
    mail(:to => user.email, :subject => "Welcome to Crowd Funding Site")
  end

  def notification_for_switching_to_worker(user)
     @user = user
     mail(:to => user.email, :subject => "Advanced to worker")
  end
end
