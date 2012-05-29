class AdminGroupConsultantWorker
  include Mongoid::Document
  belongs_to :admin_group
  belongs_to :consultant_worker
  has_one :affillation_key
  #field :affillation_key_id,                 :type => String
end
