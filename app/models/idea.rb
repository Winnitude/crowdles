class Idea
  include Mongoid::Document
  include Mongoid::MultiParameterAttributes
  attr_accessible :title, :sub_title, :introduction, :amount, :currency, :affiliation_key, :category, :is_private ,:is_pro, :general_description, :aims_description, :why_support_description, :funding_usage_description ,:people_behind_description, :rewards, :employee_type, :big_image, :small_image, :general_image, :aims_image, :why_support_image, :funding_usage_image, :people_behind_image,:type,:sub_category,:is_private
  # Relations
  #embedded_in :user , :inverse_of => :comments
   belongs_to :user

  field :title,     :type => String , :null => false, :default => ""
  field :sub_title,      :type => String  , :null => false, :default => ""
  field :introduction,          :type => String  , :null => false, :default => ""
  field :amount,     :type => Float, :null => false
  field :currency,           :type => Float, :null => false
  field :affiliation_key,          :type => String  , :null => false, :default => ""
  field :category,  :type => String  , :null => false, :default => ""
  field :sub_category,      :type => String  , :null => false, :default => ""
  field :user_id,        :type => Integer,  :required => true
  field :is_private,            :type => String, :default => ""
  field :is_pro,           :type => String, :default => "N"
  field :general_description,      :type => String, :default => ""
  field :aims_description,:type => String, :default => ""
  field :why_support_description, :type => String, :default => ""
  field :funding_usage_description,:type => String, :default => ""
  field :people_behind_description,:type => String, :default => ""
  field :rewards,:type => String, :default => ""
  field :type,:type => String, :default => "Idea"

  mount_uploader :big_image, ImageUploader
  mount_uploader :small_image, ImageUploader
  mount_uploader :general_image, ImageUploader
  mount_uploader :aims_image, ImageUploader
  mount_uploader :why_support_image, ImageUploader
  mount_uploader :funding_usage_image, ImageUploader
  mount_uploader :people_behind_image, ImageUploader

  def self.get_MAGO_ideas(mago)
    ideas = Idea.all.to_a.select{|i| (i.affiliation_key == "" || !(AffillationKey.all.map{|i| i.key}.include?(i.affiliation_key))) &&  i.user.present? && i.user.country == mago.country}

  end
end
