class AdminGroupWorker
  include Mongoid::Document
  belongs_to :admin_group
  belongs_to :user ,:foreign_key=>:worker_id ,:class_name=>"User"

  field :worker_id,                       :type => String

end
