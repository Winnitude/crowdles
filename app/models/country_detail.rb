class CountryDetail
  include Mongoid::Document
  has_many :users

  field :name, :type => String
  def self.is_fake (name)
    country = where(:name => name).first
    !country.present?
  end
end
