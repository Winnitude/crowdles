class Profile
  include Mongoid::Document
  field :first_name, :type => String , :null => false, :default => ""
  field :last_name, :type => String  , :null => false, :default => ""
  embedded_in :user, :inverse_of => :profile

end
