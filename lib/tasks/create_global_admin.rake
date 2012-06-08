namespace :global_admin do
  require 'roles_management.rb'
  include RolesManagement
  desc "Creating global admin"
  task :create_and_save => :environment do
    user = User.new(:email=> "ga_cf@yopmail.com")
    user.password = "123456"
    user.country = "India"
    user.password_confirmation
    user.is_provider_terms_of_service= true
    user.terms_of_service = true
    user.skip_confirmation!
    user.save
    RolesManager.add_role("Global Admin", user)
    RolesManager.remove_role("User", user)
    global_admin_general_setting = user.build_global_admin_general_setting
    global_admin_general_setting.save
  end
end

