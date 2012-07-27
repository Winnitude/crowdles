namespace :add_language do

  desc "Add language to Crowdles"
  task :add_language => :environment do
    require 'csv'
    puts Rails.root
    i=1
    CSV.foreach(Rails.root.join("language.csv"), 'r') do |row|
      puts row.inspect
      @lang = Language.create(:name => row[0])
      puts"hhhhhhhhhhhh #{row[0]}###########{i}"
      i=i+1
    end
  end
end

