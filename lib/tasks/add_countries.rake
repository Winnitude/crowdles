namespace :add_countries do

  desc "Add Countries to Crowdles"
  task :add_country => :environment do
    require 'csv'
    puts Rails.root
    i=1
    CSV.foreach(Rails.root.join("countries.csv"), 'r') do |row|
     puts row.inspect
      @country = CountryDetail.create(:name => row[0])
      puts"hhhhhhhhhhhh #{row[0]}###########{i}"
      i=i+1
    end
  end
end

