class UserMailer < ActionMailer::Base
  default from: "from@example.com"
   def welcome_email(user)
    @user = user
    @url  = LOCAL_HOST
    mail(:to => user.email, :subject => "Welcome to Crowd Funding Site")
  end
end
