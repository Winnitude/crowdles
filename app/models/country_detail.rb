class CountryDetail
  include Mongoid::Document
  #has_many :users

  field :name, :type => String
  def self.is_fake (name)
    if name.present? == false
      return false
    else
      country = where(:name => name).first
      !country.present?
    end
  end
end
