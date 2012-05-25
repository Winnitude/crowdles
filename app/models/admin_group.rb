class AdminGroup
  include Mongoid::Document

  belongs_to :user, :foreign_key => :admin_group_owner_id,    :class_name => "User"
  has_many :admin_group_workers
  has_many :business_groups


  field :name,                 :type => String
  field :admin_group_owner_id,                 :type => String

end
