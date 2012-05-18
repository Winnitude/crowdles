CrowdFunding::Application.routes.draw do

  resources :ideas do
    collection do
      get 'show_good_idea'
      get 'my_own_project'
    end
  end
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end
  resources :homes do
    collection do
      get 'news_letter'
      post 'persist_news_letter'
      get 'send_news_letter_page'
      post 'send_news_letter'
      get  'get_campaigns'
      get  'show_error_msg'
      get  'resend_varification_mail'
    end

  end
  as :user do
    match '/user/confirmation' => 'confirmations#update', :via => :put, :as => :update_user_confirmation
    match '/user/management'   =>'users#user_management',:via => :get
    match '/user/information/:id'   =>'users#show_user_to_local_admin',:via => :get ,:as=>:show_user_to_local_admin
    match '/user/edit/:id'   =>'users#edit_user_info',:via => :get ,:as=>:edit_user_info
    match '/user/update/:id'   =>'users#update_user_info',:via => :post ,:as=>:update_user_info
    match '/user/suspend/:id'   =>'users#suspend_user',:via => :get    ,:as=>:suspend_user

  end


  devise_for :users, :scope => "user",
             :controllers => {:omniauth_callbacks => "omniauth_callbacks" ,
                              :sessions => "sessions" ,
                              :confirmations => 'confirmations',
                              :passwords => 'passwords',
                              :registrations => 'registrations'
             }   do
    get "/login", :to => "sessions#new"
    get "/logout", :to => "sessions#destroy"

  end

  resources :people do
#    member do
#
#    end
    collection do
      get 'provider_terms_of_service'
      put 'update_provider_terms_of_service'
    end
  end

  resources :profiles


  as :local_admins do
    match '/local_admins/show_local_admin'   =>'local_admins#show_local_admin',:via => :get
    match '/local_admins/change_admin_role/:id'   =>'local_admins#change_admin_role',:via => :get    ,:as=>:change_admin_role
  end


  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  root :to => "homes#index"

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
  match "/images/uploads/*path" => "gridfs#serve"
end
