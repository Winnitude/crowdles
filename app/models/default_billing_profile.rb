class DefaultBillingProfile
  include Mongoid::Document
  belongs_to :user
end
