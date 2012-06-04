class LaSetting
  include Mongoid::Document
  belongs_to :user


  field :is_master,                                            :type => Boolean    ###LA
  field :la_country,                                           :type => String     ###LA \
  validates :la_country,
            :uniqueness => true

  field :language,                                             :type => String     ###LA
  field :web_domain,                                           :type => String     ###LA
  field :platform_home,                                        :type => String     ###LA
  field :status,                                               :type => String
  field :name,                                                 :type => String     ###la

  field :company_name,                                         :type => String
  field :address,                                              :type => String
  field :billing_profile_id,                                   :type=> String
  field :platform_billing_profile_id,                          :type=> String
  field :mail_chimp_integration_key,                           :type=> String
  field :freshbooks_integration_key,                           :type=> String

end
