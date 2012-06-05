class AdminGroup
  include Mongoid::Document

  belongs_to :user
  has_many :admin_group_consultant_workers


  has_many :admin_group_workers
  has_many :business_groups
  has_one  :affillation_key

  field :name,                 :type => String
  field :description,                 :type => String
  #field :affillation_key_id,                 :type => String
  field :is_master,                 :type => Boolean
  field :admin_group_owner_id,                 :type => String
  field :is_active,                 :type => Boolean  , :default => true
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
end
