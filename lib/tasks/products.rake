namespace :products do
  desc "Creating Dummy Products"
  task :create_products => :environment do
    Product.create(:platform_product_name => "Bussiness Basic" ,:bg_private => false ,:bg_window_number => 1, :bg_contest_number => 2, :ag_workers_number => 2 , :ag_custom_commissions => false, :ag_recepient_settings => false ,:ag_payment_gateway_commissions_payer_settings => false , :product_annual_price => 456.6 , :type =>"Slave")
    Product.create(:platform_product_name => "Bussiness Plus" ,:bg_private => true ,:bg_window_number => 4, :bg_contest_number => 6, :ag_workers_number => 6 , :ag_custom_commissions => false, :ag_recepient_settings => false ,:ag_payment_gateway_commissions_payer_settings => false , :product_annual_price => 678.6  , :type =>"Slave")
    Product.create(:platform_product_name => "Professional Plus" ,:bg_private => true ,:bg_window_number => 7, :bg_contest_number => 9, :ag_workers_number => 6 , :ag_custom_commissions => true, :ag_recepient_settings => true ,:ag_payment_gateway_commissions_payer_settings => false , :product_annual_price => 456.6 , :type =>"Slave")
    Product.create(:platform_product_name => "MAG Default" ,:bg_private => true ,:ag_custom_commissions => true, :ag_recepient_settings => true ,:ag_payment_gateway_commissions_payer_settings => true , :product_annual_price => 456.6 , :type =>"Master")
  end
end
