namespace :fake_users do
  require 'roles_management.rb'
  require 'faker'
  include RolesManagement
  desc "Creating fake users"
  task :create => :environment do
    (0..200).each do |i|
      user = User.new(:email=> Faker::Internet.email)
      user.password = "666666"
      user.country = CountryDetail.all.collect{|i| i.name}.sample
      puts user.country
      user.password_confirmation
      user.is_provider_terms_of_service= true
      user.terms_of_service = true
      user.skip_confirmation!
      user.save
    end
  end
end
