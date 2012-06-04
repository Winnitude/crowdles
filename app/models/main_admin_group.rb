class MainAdminGroup
  include Mongoid::Document
  belongs_to :user, :foreign_key => :main_admin_group_owner_id,    :class_name => "User"
end
