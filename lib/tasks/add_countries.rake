namespace :add_countries do

  desc "Add Countries to Crowdles"
  task :add_country => :environment do
    require 'csv'
    puts Rails.root
    CSV.open(Rails.root.join("countries.csv"), 'r') do |row|
      @country = CountryDetail.create(:name => row[2])
      puts @conuntry.inspect

    end
  end
end

