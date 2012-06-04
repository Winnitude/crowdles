class MainAdminGroup
  include Mongoid::Document
  belongs_to :user, :foreign_key => :main_admin_group_owner_id,    :class_name => "User"
  field :country,                                           :type => String     ###LA \
  validates :country,
            :uniqueness => true
end
