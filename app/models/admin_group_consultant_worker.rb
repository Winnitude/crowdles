class AdminGroupConsultantWorker
  include Mongoid::Document
  belongs_to :admin_group
  belongs_to :consultant_workers
  field :affillation_key_id,                 :type => String
end
