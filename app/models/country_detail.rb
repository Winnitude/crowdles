class CountryDetail
  include Mongoid::Document
  has_many :users

  field :name, :type => String
end
