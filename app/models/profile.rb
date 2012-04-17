class Profile
  include Mongoid::Document

  embedded_in :user, :inverse_of => :profile

#  def full_name
#    self.first_name.capitalize+" "+self.last_name.capitalize
#  end

end
