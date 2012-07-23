namespace :add_countries do

  desc "Add Countries to Crowdles"
  task :add_country => :environment do
    require 'csv'
    puts Rails.root
    CSV.foreach(Rails.root.join("countries.csv"), 'r') do |row|
     puts row.inspect
      @country = CountryDetail.create(:name => row[0])
      puts @country.inspect

    end
  end
end

