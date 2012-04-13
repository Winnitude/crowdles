class GuestUser
  include Mongoid::Document

  ##GuestUser Fields
  field :email,              :type => String, :null => false, :default => ""
#  field :first_name, :type => String , :null => false, :default => ""
#  field :last_name, :type => String  , :null => false, :default => ""
  field :country, :type => String   , :null => false, :default => ""
  field :language, :type => String   , :null => false, :default => ""

end
