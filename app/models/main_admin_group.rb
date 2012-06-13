class MainAdminGroup
  include Mongoid::Document
  belongs_to :user
  field :country,                                           :type => String     ###LA \
  validates :country,
            :uniqueness => true

  field :name,                                      :type => String
  field :description,                               :type => String
                                                                                #field :affillation_key_id,                 :type => String
  field :admin_group_owner_id,                      :type => String
                                                                                # field :is_active,                                 :type => Boolean  ,  :default => true
  field :local_admin_id ,                           :type => String
  field :ag_country ,                                  :type => String
  field :admin_group_type ,                         :type => String
  field :main_worker_id ,                           :type => String
  field :ag_creation_date ,                         :type => DateTime   , :default => DateTime.now.utc
  field :ag_expiration_date ,                       :type => DateTime
  field :ag_deactivation_date ,                     :type => DateTime
  field :admin_group_type ,                         :type => String ,     :default => 'Master'
  field :admin_group_email ,                        :type => String
  field :status ,                                   :type => String   ,   :default => 'new'
  field :language ,                                 :type => String
  field :first_name ,                               :type => String
  field :last_name ,                                :type => String
  field :company_name ,                             :type => String
  field :country ,                                  :type => String
  field :city ,                                     :type => String
  field :zip_code ,                                 :type => String
  field :state ,                                    :type => String
  field :address ,                                  :type => String
  field :additional_address ,                       :type => String

  field :phone_number ,                             :type => String
  field :billing_profile_id ,                       :type => String
  field :self_management ,                          :type => Boolean   ,   :default => false
  field :arena_flag ,                               :type => Boolean    ,   :default => false
  field :bg_contest_allowed ,                       :type => Boolean   ,   :default => false
  field :bg_free_standard_commissions_allowed ,     :type => Boolean   ,   :default => false
  field :bg_free_pro_commissions_allowed ,          :type => Boolean   ,   :default => false
  field :bg_free_private_commissions_allowed ,      :type => Boolean  ,   :default => false
  field :bg_custom_commissions_allowed ,            :type => Boolean    ,   :default => false
  field :bg_recepient_setting_allowed ,             :type => Boolean     ,   :default => false
  field :bg_gateway_commission_payer_setting_allowed,:type => Boolean    ,   :default => false
  field :platform_billing_profile_id,                :type => String
  field :paas_product_id ,                           :type => String
  field :paas_fees_exemption ,                       :type => String
  field :paas_exemption_expiration_date ,            :type => DateTime
  field :ag_commissions ,                            :type => Float
  field :consultant_commissions ,                    :type => Float
  field :is_active ,                                 :type => Boolean

  def assign_attributes local_admin
    self.admin_group_owner_id = local_admin.id
    self.country = local_admin.country
    self.billing_profile_id = local_admin.la_setting.billing_profile_id
    self.company_name = local_admin.la_setting.company_name
    self.ag_country = local_admin.la_setting.la_country
    self.admin_group_email = local_admin.email
  end
end
