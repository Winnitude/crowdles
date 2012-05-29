class AdminGroup
  include Mongoid::Document

  belongs_to :user, :foreign_key => :admin_group_owner_id,    :class_name => "User"
  has_many :admin_group_consultant_workers


  has_many :admin_group_workers
  has_many :business_groups
  has_one  :affillation_key

  field :name,                 :type => String
  field :affillation_key_id,                 :type => String
  field :is_master,                 :type => Boolean
  field :admin_group_owner_id,                 :type => String
  field :admin_group_consultant_worker_id, :type => String

  def save_affillation_key_for_admin_group_owner
    @affillation_key = AffillationKey.new
    @affillation_key.save_affillation_key(@affillation_key.generate_affillation_key,self.id)
    self.affillation_key_id = @affillation_key.id
    self.save
  end


end
