class User
  include Mongoid::Document
  #  embeds_one :profile
#  accepts_nested_attributes_for :profile
  has_one :profile,:dependent => :destroy,:autosave=> true# it should be first
  accepts_nested_attributes_for :profile
#  before_create :build_profile

  attr_accessible :profile_attributes, :email, :password, :password_confirmation,
                  :remember_me ,:country, :terms_of_service,:is_provider,
                  :is_provider_terms_of_service,:profile
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
            :uniqueness => true,
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

end


