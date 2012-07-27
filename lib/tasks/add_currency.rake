namespace :add_currency do

  desc "Add currency to Crowdles"
  task :add_currency => :environment do
    require 'csv'
    puts Rails.root
    i=1
    CSV.foreach(Rails.root.join("currency.csv"), 'r') do |row|
      puts row.inspect
      @lang = Currency.create(:name => row[0])
      puts"hhhhhhhhhhhh #{row[0]}###########{i}"
      i=i+1
    end
  end
end

