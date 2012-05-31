namespace :role do
  desc "Creating Roles"
  task :create_and_save => :environment do
    roles_array = ["User","Worker","Global Admin","Local Admin", "Main Local Admin", "Business Group Owner" ,"Admin Group Owner" ,"Admin Group Worker" ,"Main Admin Group Owner", "Consultant Worker"]
    roles_array.each do |role_name|
      role = Role.new(:role=> role_name)
      role.save
    end
  end
end
