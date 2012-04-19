class Profile
  include Mongoid::Document
  attr_accessible :first_name, :last_name, :full_name,:title, :birth_date, :gender, :city, :state, :mobile_number, :biography

  embedded_in :user, :inverse_of => :profile


  field :first_name,     :type => String , :null => false, :default => ""
  field :last_name,      :type => String  , :null => false, :default => ""
  field :title,          :type => String  , :null => false, :default => ""
  field :gender,         :type => String  , :null => false, :default => ""
  field :birth_date,     :type => Date, :null => false, :default => ""
  field :city,           :type => String  , :null => false, :default => ""
  field :state,          :type => String  , :null => false, :default => ""
  field :mobile_number,  :type => String  , :null => false, :default => ""
  field :biography,      :type => String  , :null => false, :default => ""
  validates_with FullNameValidator
  before_validation :strip_names

  def full_name
    [first_name, last_name].join(' ')
  end

  def to_s
    full_name
  end

#  def full_name
#    self.first_name.capitalize+" "+self.last_name.capitalize
#  end

   protected

  def strip_names
    strip_it! self.first_name
    strip_it! self.last_name
  end

  def strip_it! field
    field.strip! if !field.blank?
  end

end
