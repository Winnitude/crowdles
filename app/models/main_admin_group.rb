class MainAdminGroup
  include Mongoid::Document
  belongs_to :user
  field :country,                                           :type => String     ###LA \
  validates :country,
            :uniqueness => true
end
