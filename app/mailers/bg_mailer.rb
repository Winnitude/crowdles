class BgMailer < ActionMailer::Base
  default from: "from@example.com"

  def get_ownership(owner)
    mail(:to => owner.email, :subject => "Welcome to Crowd Funding Site" ,:body => "You Are now Owner for the business group")
  end

  def lost_ownership(owner)
    mail(:to => owner.email, :subject => "Welcome to Crowd Funding Site", :body => " Sorry You have lost the BG OwnerShip")
  end
end
