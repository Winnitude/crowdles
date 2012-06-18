class GlobalAdminGeneralSetting
  include Mongoid::Document
  belongs_to :user

  field :plateform_name,                      :type => String ,:null => false, :default => 'Crowdles'
  field  :platform_email   ,  :type => String ,:null => false
  field :plateform_default_language,          :type => String ,:null => false, :default => 'English'
  field :plateform_default_domain,            :type => String ,:null => false, :default => 'crowdles.com'

  field :facebook_login_enabled,              :type => Boolean, :default => true
  field :facebook_signup_enabled,             :type => Boolean, :default => true
  field :mailchimp_integration_enabled,       :type => Boolean, :default => false
  field :freshbooks_integration_enabled,      :type => Boolean, :default => true
  field :platform_legal_terms_global,         :type => String
  field :arena_minimum_cap,                   :type => Integer
  field :arena_maximum_cap,                   :type => Integer
  field :arena_factor,                        :type => Float

  field :bg_qualification_votes,              :type => Integer
  field :ga_facebook,                         :type => String
  field :ga_twitter,                          :type => String
  field :user_terms,                          :type => String
  field :project_terms,                       :type => String
  field :worker_terms,                        :type => String
  field :worker_consultant_terms,             :type => String
  field :admin_group_terms,                   :type => String
  field :business_group_terms,                :type => String
  field :no_profit_terms,                     :type => String


  validates :plateform_name   , :presence => true
  validates :plateform_default_language   , :presence => true
  validates :plateform_default_domain   , :presence => true
  #validates :facebook_login_enabled   , :presence => true
  #validates :facebook_signup_enabled   , :presence => true
  #validates :mailchimp_integration_enabled   , :presence => true
  #validates :freshbooks_integration_enabled   , :presence => true
            #:uniqueness => true,

end

