namespace :language do
  desc "Creating languages"
  task :create_and_save => :environment do
    language_array = ["English", "Hindi", "Italian" ,"chinese" ,"French" ,"Japanese" ,"Spanish", "Latin", "Russian" ,"German"]
    language_array.each do |language_name|
      language = Language.new(:name=> language_name)
      language.save
    end
  end
end
