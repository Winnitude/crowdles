class Worker < ActionMailer::Base
  default from: "from@example.com"

  def assign_worker(user)
    @user = user
    mail(:to => user.email, :subject => "Welcome to Crowd Funding Site" , :body=> "Hi user You are assigned as worker for a admin group")
  end
end
