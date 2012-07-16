class PlatformBillingProfile
  before_save :set_creation_date
  include Mongoid::Document
  belongs_to :la_setting
  field :creation_date                 ,:type => DateTime
  field :last_modification_date         ,:type => DateTime
  field :currency                     ,:type => String
  field :first_name                     ,:type => String
  field :last_name                       ,:type => String
  field :company_name                     ,:type => String
  field :birth_date                     ,:type => Date
  field :birth_place                     ,:type => String
  field :email                           ,:type => String
  field :telephone_number                  ,:type => String
  field :language                         ,:type => String
  field :vat_number                         ,:type => String
  field :country                          ,:type => String
  field :city                             ,:type => String
  field :zip_code                           ,:type => String
  field :state                             ,:type => String
  field :street1                            ,:type => String
  field :street2                           ,:type => String
  field :contact_first_name                    ,:type => String
  field :contact_last_name                 ,:type => String
  field :contact_telephone_number        ,:type => String

  def set_bp_attributes person
    default_profile = person.default_billing_profile
    self.creation_date = DateTime.now
    self.currency = default_profile.currency
    self.first_name =  default_profile.first_name
    self.last_name = default_profile.last_name
    self.company_name = default_profile.company_name
    self.birth_date = default_profile.birth_date
    self.birth_place = default_profile.birth_place
    self.email       = default_profile.email
    self.telephone_number = default_profile.telephone_number
    self.language = default_profile.language
    self.vat_number = default_profile.vat_number
    self.country = default_profile.country
    self.city    = default_profile.city
    self.zip_code = default_profile.zip_code
    self.state    = default_profile.state
    self.street1  = default_profile.street1
    self.street2  = default_profile.street2
    self.contact_first_name = default_profile.contact_first_name
    self.contact_last_name  = default_profile.contact_last_name
    self.contact_telephone_number = default_profile.contact_telephone_number
  end

  def set_creation_date
    self.creation_date = DateTime.now
    self.last_modification_date = DateTime.now
  end
end
