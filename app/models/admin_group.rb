class AdminGroup
  include Mongoid::Document

  belongs_to :user
  belongs_to :la_setting
  has_many :admin_group_consultant_workers


  has_many :admin_group_workers
  has_many :business_groups
  has_one  :affillation_key

  field :name,                                      :type => String
  #field :description,                               :type => String
  #field :affillation_key_id,                 :type => String
  #field :admin_group_owner_id,                      :type => String
 # field :is_active,                                 :type => Boolean  ,  :default => true
 # field :local_admin_id ,                           :type => String
 # field :country ,                                  :type => String
 # field :admin_group_type ,                         :type => String
  field :is_master ,                               :type => Boolean ,    :default => false
  #field :main_worker_id ,                           :type => String
  field :ag_creation_date ,                         :type => DateTime   , :default => DateTime.now.utc
  field :ag_expiration_date ,                       :type => DateTime
  field :ag_deactivation_date ,                     :type => DateTime
  #field :admin_group_type ,                         :type => String ,     :default => 'Slave'
  field :admin_group_email ,                        :type => String
  field :status ,                                   :type => String   ,   :default => 'new'
  field :language ,                                 :type => String
  #field :first_name ,                               :type => String
  #field :last_name ,                                :type => String
  field :company_name ,                             :type => String
  #field :country ,                                  :type => String
  #field :city ,                                     :type => String
  #field :zip_code ,                                 :type => String
  #field :state ,                                    :type => String
  field :address ,                                  :type => String
  #field :additional_address ,                       :type => String

  #field :phone_number ,                             :type => String
  #field :billing_profile_id ,                       :type => String
  field :self_management ,                          :type => Boolean
  field :arena_flag ,                               :type => Boolean
  field :bg_contest_allowed ,                       :type => Boolean
  field :bg_free_standard_commissions_allowed ,     :type => Boolean
  field :bg_free_pro_commissions_allowed ,          :type => Boolean
  field :bg_free_private_commissions_allowed ,      :type => Boolean
  field :bg_custom_commissions_allowed ,            :type => Boolean
  field :bg_recepient_setting_allowed ,             :type => Boolean
  field :bg_gateway_commission_payer_setting_allowed,:type => Boolean
  #field :platform_billing_profile_id,                :type => String
  #field :paas_product_id ,                           :type => String
  field :paas_fees_exemption ,                       :type => String
  field :paas_exemption_expiration_date ,            :type => DateTime
  field :ag_commissions ,                            :type => Float
  field :consultant_commissions ,                    :type => Float
  field :is_active ,                                 :type => Boolean

  #validates :main_worker_id   , :presence => true
  validates :ag_creation_date   , :presence => true


  #field :admin_group_consultant_worker_id, :type => String

  def save_affillation_key_for_admin_group_owner
    @affillation_key = AffillationKey.new
    @affillation_key.save_affillation_key(@affillation_key.generate_affillation_key,self.id)
    # self.affillation_key_id = @affillation_key.id
    self.save
  end

  def all_related_keys #NOTE:define this method will return all the keys which are related to this admin group. All keys will include the AK belongs to that AG and all the keys of its CW
    admin_group_consultant_workers=self.admin_group_consultant_workers
    keys = Array.new
    admin_group_consultant_workers.each_with_index do |i,j|
      keys[j] = i.affillation_key.key if i.affillation_key.present?
    end
    keys = keys + self.affillation_key.key.to_a
    keys
  end

  def all_related_keys_concern_type #NOTE:define this method will return all the keys which are related to this admin group. All keys will include the AK belongs to that AG and all the keys of its CW
    admin_group_consultant_workers=self.admin_group_consultant_workers
    keys = Array.new
    admin_group_consultant_workers.each_with_index do |i,j|
      keys[j] = i.affillation_key if i.affillation_key.present?
    end
    keys = keys + self.affillation_key.to_a
    keys
  end

  def change_status
    self.is_active = self.is_active? ? false : true
    self.save
  end

  def get_all_my_admin_group_workers
    self.admin_group_workers.collect{|i| i.user if i.user.present?}
  end


end
