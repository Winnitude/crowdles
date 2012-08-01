class Product
  include Mongoid::Document
  has_many :user_products
  field :platform_product_name,           :type => String
  field :bg_private,                     :type => Boolean          ,:default => false
  field :bg_window_number,                 :type => Integer
  field :bg_contest_number,               :type => Integer
  field :ag_workers_number,               :type => Integer
  field :ag_custom_commissions,           :type => Boolean   ,:default => false
  field :ag_recepient_settings,           :type => Boolean  ,:default => false
  field :ag_payment_gateway_commissions_payer_settings    ,:type => Boolean   ,:default => false
  field :product_monthly_price,           :type => Float
  field :product_annual_price,            :type => Float
  field :status,                          :type => String
  field :product_type  ,                 :type => String        , :default => "AG"
  field :product_target  ,                       :type => String

  def get_window_number
    self.bg_window_number.present?  ? self.bg_window_number :  "unlimited"
  end

  def get_contest_number
   self.bg_contest_number.present? ?  self.bg_contest_number   :  "unlimited"
  end

  def get_ag_workers_number
    self.ag_workers_number.present?    ? self.ag_workers_number :  "unlimited"
  end


  def self.add_product(product,user)
    product = Product.find(product._id)
    user = User.where(:_id => user._id).first
    all_user_products = user.user_products.collect{|i| i.product}
    puts all_user_products.inspect
    if product.present? && !(all_user_products.include?(product))
      puts("inside if")
      user_product = user.user_products.new
      user_product.product = product
      user_product.save
    end
  end

  def self.remove_product(product,user)
    product = Product.find(product._id)
    user = User.where(:_id => user._id).first
    all_user_products = user.user_products.collect{|i| i.product}
    puts all_user_products.inspect
    if  product.present? && (all_user_products.include?(product))
      puts("inside if")
      selected_product = user.user_products.select{|i|  i.product.present? && i.product == product}.first
      selected_product.delete
    end
  end

  def self.get_product(user)
    user = User.where(:_id => user._id).first
    all_user_products = user.user_products.collect{|i| i.product if i.product.present?}
    puts all_user_products.inspect
    all_user_products.first
  end
end
