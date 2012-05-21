class Profile
  include Mongoid::Document
  include Mongoid::MultiParameterAttributes
  attr_accessible :first_name, :last_name, :full_name,:title, :birth_date, :gender, :city, :state, :mobile_number, :biography , :image , :video, :web,:blog ,:social_fb,:social_twitter,:social_linkedin,:social_myspace, :zip_code,:street,:street_number,:additional_address_info, :telephone_number,:company_name,:address,:billing_profile_id,:platform_billing_profile_id,:mail_chimp_integration_key,:freshbooks_integration_key


#  embedded_in :user, :inverse_of => :profile
  belongs_to :user


  field :first_name,     :type => String , :null => false, :default => ""
  field :last_name,      :type => String  , :null => false, :default => ""
  field :title,          :type => String  , :null => false, :default => ""
  field :gender,         :type => String  , :null => false, :default => ""
  field :birth_date,     :type => Date,     :null => false, :default => ""
  field :city,           :type => String  , :null => false, :default => ""
  field :state,          :type => String  , :null => false, :default => ""
  field :mobile_number,  :type => String  , :null => false, :default => ""
  field :biography,      :type => String  , :null => false, :default => ""
  field :user_id,        :type => Integer,  :required => true
  field :web,            :type => String, :default => ""
  field :blog,           :type => String, :default => ""
  field :social_fb,      :type => String, :default => ""
  field :social_twitter, :type => String, :default => ""
  field :social_linkedin,:type => String, :default => ""
  field :social_myspace, :type => String, :default => ""
  field :zip_code,       :type => String, :default => ""
  field :street,         :type => String, :default => ""
  field :street_number,  :type => String, :default => ""
  field :additional_address_info,   :type => String, :default => ""
  field :telephone_number,          :type => String, :default => ""
  mount_uploader :image, ImageUploader
  mount_uploader :video, ImageUploader
  field :company_name,         :type => String
  field :address,         :type => String
  field :billing_profile_id, :type=> String
  field :platform_billing_profile_id, :type=> String
  field :mail_chimp_integration_key, :type=> String
  field :freshbooks_integration_key, :type=> String
#  validates_with FullNameValidator
#  before_validation :strip_names

  def full_name
    [first_name, last_name].join(' ')
  end

  def to_s
    full_name
  end

#  def full_name
#    self.first_name.capitalize+" "+self.last_name.capitalize
#  end

#  protected

#  def strip_names
#    strip_it! self.first_name
#    strip_it! self.last_name
#  end
#
#  def strip_it! field
#    field.strip! if !field.blank?
#  end

end
