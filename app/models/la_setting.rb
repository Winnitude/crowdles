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
  field :user_terms,                                           :type => String     ###LA
  field :project_terms,                                        :type => String     ###LA
  field :worker_consultant_terms,                              :type => String     ###LA
  field :worker_terms,                                        :type => String     ###L
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
  field :master_billing_profile_deviation,                     :type => Boolean     ###la
  field :master_administration_deviation,                      :type => Boolean     ###la
  field :master_worker_deviation,                              :type => String     ###la
  field :master_worker_deviation_comment,                      :type => String     ###la


  field :company_name,                                         :type => String
  field :address,                                              :type => String
  field :billing_profile_id,                                   :type=> String
  field :platform_billing_profile_id,                          :type=> String
  field :mail_chimp_integration_key,                           :type=> String
  field :freshbooks_integration_key,                           :type=> String
  field :la_facebook,                                          :type=> String
  field :la_twitter,                                           :type=> String
  field :la_linked_in,                                        :type=> String

  mount_uploader :contact_photo, ImageUploader
end
