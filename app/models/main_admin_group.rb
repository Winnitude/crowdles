class MainAdminGroup
  include Mongoid::Document
  belongs_to :user
  has_many :admin_group_workers
  field :country,                                           :type => String     ###LA \
  validates :country,
            :uniqueness => true
end
