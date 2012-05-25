class AdminGroup
  include Mongoid::Document

  belongs_to :user, :foreign_key => :admin_group_owner_id,    :class_name => "User"
 # has_many :consultant_workers, :through => :admin_group_consultant_worker
  has_many :admin_group_consultant_workers

  has_many :admin_group_workers
  has_many :business_groups
  has_one  :affillation_key

  field :name,                 :type => String
  field :admin_group_owner_id,                 :type => String

end
