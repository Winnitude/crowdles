class ConsultantWorker
  include Mongoid::Document
  belongs_to :user
  has_many :admin_group_consultant_workers
  #field :admin_group_consultant_worker_id,                 :type => String
  #field :worker_id,                       :type => String
end
