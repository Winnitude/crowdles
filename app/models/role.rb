class Role
  include Mongoid::Document
  has_many :user_roles
  field :role, :type => String
end
