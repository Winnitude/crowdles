class AdminGroupWorker
  include Mongoid::Document
  belongs_to :admin_group
  belongs_to :user

  field :worker_id,                       :type => String

end
