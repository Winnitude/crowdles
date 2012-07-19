class DefaultBillingProfile
  include Mongoid::Document
  belongs_to :user
  before_save :set_creation_date

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

  validates  :first_name, :last_name , :currency , :company_name,:email, :telephone_number , :language, :country, :city, :state, :street1 , :presence => true
  validate :not_fake_country
  validate :not_fake_language



  def not_fake_country
    if  CountryDetail.is_fake(country)
      errors.add(:country, "Not present in country List")
    end
  end

  def not_fake_language
    if  Language.is_fake(language)
      errors.add(:language, "Not present in Language List")
    end
  end

  private

  def set_creation_date
    logger.info "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
    self.creation_date = DateTime.now
    self.last_modification_date = DateTime.now
  end

end
