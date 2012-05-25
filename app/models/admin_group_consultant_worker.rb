class AdminGroupConsultantWorker
  include Mongoid::Document
  belongs_to :admin_group
  belongs_to :consultant_worker
end
