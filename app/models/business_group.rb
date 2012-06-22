class BusinessGroup
  include Mongoid::Document

  belongs_to :admin_group
  belongs_to :user
  has_one  :affillation_key
  field :category,                 :type => String
  #field :business_group_owner_id,                 :type => String

end
