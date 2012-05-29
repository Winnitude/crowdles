class ConsultantWorker
  include Mongoid::Document
  belongs_to :user, :foreign_key => :worker_id,    :class_name => "User"
  has_many :admin_group_consultant_workers
  #field :admin_group_consultant_worker_id,                 :type => String
  field :worker_id,                       :type => String
end
