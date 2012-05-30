namespace :global_admin do
  desc "Creating global admin"
  task :create_and_save => :environment do
    user = User.new(:email=> "ga_cf@yopmail.com")
    user.password = "123456"
    user.country = "India"
    user.password_confirmation
    user.role = "Global Admin"
    user.is_provider_terms_of_service= true
    user.terms_of_service = true
    user.skip_confirmation!
    user.save
  end
end

