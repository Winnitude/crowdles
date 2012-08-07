class BusinessGroup
  include Mongoid::Document
  after_create :set_bg
  belongs_to :admin_group
  belongs_to :user

  field :bg_name , :type =>String
  field :bg_slogan , :type =>String
  field :bg_email              , :type =>String
  field :category ,        :type => String
  field :subcategory ,        :type => String
  field :introduction , :type =>String
  field :bg_desc , :type =>String
  field :bg_url , :type =>String
  field :bg_country , :type =>String
  field :bg_language , :type =>String
  field :affiliation_key , :type => String
  field :is_main_bg , :type => Boolean ,:default => false
  field :bg_type , :type => String ,:default => "Window"
  field :bg_visibility , :type => String ,:default => "Public"
  field :project_visibility , :type => String , :default => "Public"
  field :is_no_profit , :type => Boolean
  field :no_profit_verified , :type => Boolean
  field :bg_main_website , :type =>String
  field :bg_blog         , :type =>String
  field :bg_facebook_page                   , :type =>String
  field :bg_twitter_page      , :type =>String
  field :bg_twitter_connection   , :type =>String
  field :bg_linkedin_page       , :type =>String
  field :bg_myspace_page        , :type =>String
  field :location_country       , :type =>String
  field :location_state         , :type =>String
  field :location_city           , :type =>String
  field :location_zipcode        , :type =>String
  field :location_address      , :type =>String
  field :location_address2   , :type =>String
  field :location_gps       , :type =>String
  field :location_contact_number1    , :type =>String
  field :location_contact_number2     , :type =>String
  field :show_button_to_submit_idea   , :type => Boolean , :default => true
  field :publish_status, :type => String , :default => "Unpublished"
  field :direct_worker_assignment , :type => Boolean , :default => true
  field :self_management , :type => Boolean , :default => false
  field :arena_flag , :type => Boolean , :default => false
  field :additional_tnc, :type => String
  field :additional_terms_enabled  #to check weather additional_terms enbaled or not
  field :group_video , :type =>String
  field :creation_date , :type => Date
  field :publish_date,   :type => Date
  field :unpublished_date , :type => Date
  mount_uploader :logo, ImageUploader
  mount_uploader :default_main_image, ImageUploader
  mount_uploader :team_image, ImageUploader
  mount_uploader :image1, ImageUploader
  mount_uploader :image2, ImageUploader
  mount_uploader :image3, ImageUploader
  mount_uploader :image5, ImageUploader
  mount_uploader :image4, ImageUploader

  validate :not_fake_country
  validate :not_fake_country_for_location
  #validate :not_fake_language
  validates :affiliation_key ,
            :uniqueness => true
  def toggle_group_visibility
    self.bg_visibility = (self.bg_visibility == "Private" ? "Public" : "Private")
    self.save
  end
  def toggle_projects_visibility
    self.project_visibility = (self.project_visibility == "Private" ? "Public" : "Private")
    self.save
  end

  def not_fake_language
    if  Language.is_fake(bg_language)
      errors.add(:language, "Not present in Language List")
    end
  end

  def not_fake_country
    if  CountryDetail.is_fake(bg_country)
      errors.add(:country, "Not present in country List")
    end
  end

  def not_fake_country_for_location
    if  CountryDetail.is_fake(location_country)
      errors.add(:location_country, "Not present in country List")
    end
  end

  def set_bg
  self.creation_date= Date.today
  end

  def set_ak
    self.affiliation_key = Digest::SHA1.hexdigest(Time.now.to_s)[0,15]
  end
end
