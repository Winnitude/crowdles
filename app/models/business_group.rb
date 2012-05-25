class BusinessGroup
  include Mongoid::Document

  belongs_to :admin_group
  belongs_to :user ,:foreign_key =>:business_group_owner_id ,:class_name=>"User"

  field :category,                 :type => String
  field :business_group_owner_id,                 :type => String

end
