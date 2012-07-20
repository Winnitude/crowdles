class LaSetting
  include Mongoid::Document
  belongs_to :user
  has_many :admin_groups
  has_one :platform_billing_profile

  field :is_master,                                            :type => Boolean    ###LA
  field :la_country,                                           :type => String     ###LA \
  validates :la_country,
            :uniqueness => true

  field :language,                                             :type => String     ###LA
  field :web_domain,                                           :type => String     ###LA
  field :platform_home,                                        :type => String     ###LA
  field :user_terms,                                           :type => String     ###LA
  field :project_terms,                                        :type => String     ###LA
  field :pass_terms,                              :type => String     ###LA
  field :worker_terms,                                         :type => String     ###L
  field :admin_group_terms,                                    :type => String     ###LA
  field :business_group_terms,                                 :type => String     ###L
  field :status,                                               :type => String
  field :la_name,                                                 :type => String     ###la

  field :creation_date,                                        :type => DateTime     ###LA
  field :deactivation_date,                                    :type => DateTime     ###LA
  field :local_admin_name,                                     :type => String     ###LA
  field :contact_first_name,                                   :type => String     ###LA
  field :contact_last_name,                                    :type => String     ###L
  field :contact_email,                                        :type => String     ###LA
  field :contact_biography,                                    :type => String     ###L
  field :pass_la_commissions,                                  :type => String
  field :master_billing_profile_deviation,                     :type => Boolean, :default => false    ###la
  field :master_administration_deviation,                      :type => Boolean  , :default => false   ###la
  field :master_worker_deviation,                              :type => String     ###la
  field :master_worker_deviation_comment,                      :type => String     ###la
  field :country,                                              :type => String
  field :city,                                                 :type => String
  field :zip_code,                                              :type => String
  field :state ,                                               :type => String
  field :address,                                              :type => String
  field :additional_address,                                    :type => String

  field :phone_number,                                            :type => String

  field :company_name,                                         :type => String
  field :address,                                              :type => String
  #field :billing_profile_id,                                   :type=> String
  #field :platform_billing_profile_id,                          :type=> String
  field :mail_chimp_integration_key,                           :type=> String
  field :freshbooks_integration_key,                           :type=> String
  field :la_facebook,                                          :type=> String
  field :la_twitter,                                           :type=> String
  field :la_linked_in,                                         :type=> String
  field :no_profit_terms,                                      :type=> String
  #field :is_individual,                                        :type=> Boolean
  field :la_email,                                             :type => String
  field :first_name,                                           :type => String
  field :last_name,                                           :type => String

  mount_uploader :contact_photo, ImageUploader
  validate :not_fake_la_country
  validate :not_fake_country
  validate :not_fake_language


  def self.is_any_LA_exist_in_system
    count = self.count
    if count > 0
      return true
    else
      return false
    end
  end

  def fix_attributes
    self.creation_date = DateTime.now
    self.platform_home = "http://" + LOCAL_HOST + "/country/" + self.la_country
    self.is_master = !(LaSetting.is_any_LA_exist_in_system)
  end

  def not_fake_la_country
    if CountryDetail.is_fake(la_country)
      errors.add(:la_country, "Not present in country List")
    end
  end

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
end
