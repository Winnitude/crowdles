class ConsultantWorker
  include Mongoid::Document
  has_many :admin_group_consultant_workers
  field :admin_group_consultant_worker_id,                 :type => String


end
