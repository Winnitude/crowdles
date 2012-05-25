class AffillationKey
  include Mongoid::Document
  belongs_to :admin_group
  belongs_to :business_group

  field :key,                 :type => String

end
