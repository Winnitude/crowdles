class Product
  include Mongoid::Document
  belongs_to :user
  field :platform_product_name,           :type => String
  field :bg_private,                     :type => Boolean
  field :bg_window_number,                 :type => Integer
  field :bg_contest_number,               :type => Integer
  field :ag_workers_number,               :type => Integer
  field :ag_custom_commissions,           :type => Boolean
  field :ag_recepient_settings,           :type => Boolean
  field :ag_payment_gateway_commissions_payer_settings    ,:type => Boolean
  field :product_monthly_price,           :type => Float
  field :product_annual_price,            :type => Float
  field :status,                        :type => String
end
