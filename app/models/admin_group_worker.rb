class AdminGroupWorker
  include Mongoid::Document
  belongs_to :admin_group
  belongs_to :user
  #belongs_to :main_admin_group
  #field :worker_id,                       :type => String
  field :description,                       :type => String
  field :status,                            :type => String   ,  :default => "Active"
end
