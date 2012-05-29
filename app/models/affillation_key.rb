class AffillationKey
  include Mongoid::Document
  belongs_to :admin_group
  belongs_to :business_group
  belongs_to :admin_group_consultant_worker

  field :key,                 :type => String

  def generate_affillation_key
    Digest::SHA1.hexdigest(Time.now.to_s)[0,15]
  end

  def save_affillation_key ak_key,admin_group_id
    self.key = ak_key
    self.admin_group_id = admin_group_id
    self.save
  end

  def remove_affillation_key
    self.delete
  end

  def  generate_key
    self.key =   Digest::SHA1.hexdigest(Time.now.to_s)[0,15]
  end
end
