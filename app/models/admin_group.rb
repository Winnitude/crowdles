class AdminGroup
  include Mongoid::Document

  belongs_to :user, :foreign_key => :admin_group_owner_id,    :class_name => "User"
  has_many :admin_group_consultant_workers


  has_many :admin_group_workers
  has_many :business_groups
  has_one  :affillation_key

  field :name,                 :type => String
  #field :affillation_key_id,                 :type => String
  field :is_master,                 :type => Boolean
  field :admin_group_owner_id,                 :type => String
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


end
