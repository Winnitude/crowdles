class BusinessGroup
  include Mongoid::Document

  belongs_to :admin_group
  belongs_to :user

  field :bg_name , :type =>String
  field :bg_slogan , :type =>String
  field :bg_email              , :type =>String
  field :bg_short_desc , :type =>String
  field :bg_desc , :type =>String
  field :bg_url , :type =>String
  field :bg_country , :type =>String
  field :bg_language , :type =>String
  field :affiliation_key , :type => String
  field :is_main_bg , :type => Boolean ,:default => false
  field :bg_type , :type => String ,:default => "Window"
  field :bg_visibility , :type => String ,:default => "Public"
  field :project_visibility , :type => String
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

end
