namespace :currency do
  desc "Creating currency"
  task :create_and_save => :environment do
      currency_array = ["USD","Euro","Pound","Taka","Rupee","Yen"]
      currency_array.each do |currency_name|
      currency = Currency.new(:name=> currency_name)
      currency.save
    end
  end
end
