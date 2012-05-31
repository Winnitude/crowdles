class User
  include Mongoid::Document
  #  embeds_one :profile
  #  accepts_nested_attributes_for :profile
  has_one :profile,:dependent => :destroy,:autosave=> true# it should be first
  accepts_nested_attributes_for :profile
  #  before_create :build_profile
  # embeds_many :ideas
  has_many :ideas
  has_one :admin_group
  has_one :admin_group_worker
  has_one :business_group
  has_one :consultant_worker
  has_many :user_roles



  accepts_nested_attributes_for :idea

  attr_accessible :profile_attributes, :email, :password, :password_confirmation,
                  :remember_me ,:country, :terms_of_service,:is_provider,
                  :is_provider_terms_of_service,:profile,:role,:is_master,
                  :la_country,:la_language,:la_web_domain,:la_platform_home ,:la_name,:la_status,
                  :agw_ago_id, :bgo_ago_id,:last_sign_in_ip
  #######################User Login functionality with devise integration############################
  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,:confirmable ,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable

  ## Database authenticatable
  field :encrypted_password, :type => String, :null => false, :default => ""

  ## Recoverable
  field :reset_password_token,   :type => String
  field :reset_password_sent_at, :type => Time

  ## Rememberable
  field :remember_created_at, :type => Time
  ## Trackable
  field :sign_in_count,                   :type => Integer, :default => 0
  field :current_sign_in_at,              :type => Time
  field :last_sign_in_at,                 :type => Time
  field :current_sign_in_ip,              :type => String
  field :last_sign_in_ip,                 :type => String
  field :suspended,                       :type => Boolean ,:null => false, :default => false
  field :is_provider_terms_of_service,    :type => Boolean ,:null => false, :default => false
  field :is_provider,                     :type => Boolean ,:null => false, :default => false
  field :role,                            :type => String,  :null => false, :default => "User"
  field :is_master,                       :type => Boolean    ###LA
  field :la_country,                      :type => String     ###LA
  field :la_language,                     :type => String     ###LA
  field :la_web_domain,                   :type => String     ###LA
  field :la_platform_home,                :type => String     ###LA
  field :la_status,                       :type => String
  field :la_name,                          :type => String     ###la
  field :agw_ago_id,                        :type=> String      ##for agw type this will represent its AGO
  field :bgo_ago_id,                        :type=> String      ##for bgo type this will represent its AGO
  field :mago_la_id,                          :type => String     ###la's id for mago'
  field :canceled,                       :type => Boolean ,:null => false, :default => false

  #field :admin_group_worker_id,                       :type => String ### for admin group worker

  ## Encryptable
  # field :password_salt, :type => String

  # Confirmable
  field :confirmation_token,              :type => String
  field :confirmed_at,                    :type => Time
  field :confirmation_sent_at,            :type => Time
  field :unconfirmed_email,               :type => String # Only if using reconfirmable

  ## Lockable
  # field :failed_attempts, :type => Integer, :default => 0 # Only if lock strategy is :failed_attempts
  # field :unlock_token,    :type => String # Only if unlock strategy is :email or :both
  # field :locked_at,       :type => Time

  ## Token authenticatable
  # field :authentication_token, :type => String
  ##Type for Single Table Inheritance
  #  field :type,   :type => String


  def self.find_for_facebook_oauth(access_token, signed_in_resource=nil)
    data = access_token.extra.raw_info
    logger.info("received from Facebook: #{data.inspect}")
    user = User.where(:email => data.email).first

    if !user.nil?
      user
    else # Create an user with a stub password.
      user = User.new({:email => data["email"],
                       :password => Devise.friendly_token[0,20],
                       :is_provider => true,
                       :profile_attributes => {:first_name => data["first_name"],:last_name => data["last_name"]}
                      }
      )
      user.confirm!
      user.save!
#      UserMailer.welcome_email(user).deliver if !user.nil?
      User.where(:email => data.email).first
    end
  end


  ##Devise Confirmation settings
  # new function to set the password without knowing the current password used in our confirmation controller.
  def attempt_set_password(params)
    p = {}
    p[:password] = params[:password]
    p[:password_confirmation] = params[:password_confirmation]
    update_attributes(p)
  end
  # new function to return whether a password has been set
  def has_no_password?
    self.encrypted_password.blank?
  end

  # new function to provide access to protected method unless_confirmed
  def only_if_unconfirmed
    pending_any_confirmation {yield}
  end

  def password_required?
    # Password is required if it is being set, but not for new records
    if !persisted?
      false
    else
      !password.nil? || !password_confirmation.nil?
    end
  end
  #######################User Login functionality ENDS############################


  field :email,              :type => String
  validates :email,
            #:uniqueness => true,
            :email => true
  #
  field :country,            :type => String
  validates :country,
            :presence => true,
            :if => :should_not_provider?

  field :terms_of_service,   :type => Boolean
  validates :terms_of_service,
            :acceptance => {:accept => true},
            :on => :create,
            :if => :should_not_provider?




  def should_not_provider?
    is_provider == false
  end

  def create_worker
    self.role = "Worker"
  end

  def update_user_from_loca_admin params_user
    self.update_attributes(params_user)
  end

  ################for LA creation#############3
  def set_la_attributes
    value = ""; 8.times{value  << (65 + rand(25)).chr}
    logger.info value.inspect
    self.password = value
    self.password_confirmation
    self.role = "Local Admin"
    self.is_provider_terms_of_service= true
    self.terms_of_service = true
    self.skip_confirmation!
    value
  end

  def change_role_to_AGW(admin_group_owner)
    self.role = "Admin Group Worker"
    #self.agw_ago_id = admin_group_owner.id
  end

  def change_role_to_BGO(admin_group_owner)
    self.role = "Business Group Owner"
    self.bgo_ago_id = admin_group_owner.id
  end

  def get_admin_group
    admin_group= AdminGroup.where(:admin_group_owner_id => self._id).to_a.first  if self.role == "Admin Group Owner"
  end

  def get_business_group
    business_group= BusinessGroup.where(:business_group_owner_id => self._id).to_a.first  if self.role == "Business Group Owner"
  end

end


