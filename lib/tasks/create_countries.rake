namespace :country_detail do
  desc "Creating Countries"
  task :create_and_save => :environment do
    countries = ["India" ,"China","pakistan","bhutan","Srilanka","England","australia","USA","France","Japan","Brazil"]
    countries.each do |i|
      country = CountryDetail.new(:name=> i)
      country.save
    end
  end
end
