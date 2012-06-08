CrowdFunding::Application.routes.draw do


  constraints(:subdomain => ADMIN_SUBDOMAIN) do
    scope :module => "admin" do

      resources :global_admins do
        get "all_admins" ,:on => :collection
        get "ideas" ,    :on=> :collection
        get "edit_general_sttings",  :on => :member
        put "update_general_sttings",  :on => :member
      end

      resources :local_admins do
        get "all_users_globally" , :on => :collection
        get "listing_all_the_workers" , :on => :collection
        get "manage_admin_group" , :on => :collection
        get "show_local_admin"  ,:on => :collection
        get "new_local_admin"  ,:on => :collection
        get "add_new_slave_admin_group"  ,:on => :collection
        get "edit_local_admin",  :on => :member
        put "update_local_admin", :on => :member
        get "show_admin"       , :on => :member
        get :autocomplete_country_detail_name, :on => :collection
        post "admin_group_creation", :on => :collection
      end

      as :local_admins do
        #match '/local_admins/show_local_admin'   =>'local_admins#show_local_admin',:via => :get
        match '/local_admins/change_admin_role/:id'   =>'local_admins#change_admin_role',:via => :get    ,:as=>:change_admin_role
        #match '/local_admins/new_local_admin'   =>'local_admins#new_local_admin',:via => :get
        match '/local_admins/create_local_admin'   =>'local_admins#create_local_admin',:via => :post
        match '/local_admins/edit/:id'   =>'local_admins#edit_user_info_from_la',:via => :get ,:as=>:edit_user_info_from_la
        match '/local_admins/canceled_user_account/:id'   =>'local_admins#canceled_user_account_from_la',:via => :get    ,:as=>:canceled_user_account_from_la
        match '/local_admins/update/:id'   =>'local_admins#update_user_info_from_la',:via => :post ,:as=>:update_user_info_from_la
        match '/local_admins/suspend/:id'   =>'local_admins#suspend_user_by_la',:via => :get    ,:as=>:suspend_user_by_la
        # match '/local_admins/change_worker_role/:id'   =>'local_admins#change_worker_role',:via => :post    ,:as=>:change_worker_role
        match '/local_admins/change_ago_to_mago/:id'   =>'local_admins#change_ago_to_mago',:via => :post    ,:as=>:change_ago_to_mago
        #match '/local_admins/show_worker_for_change_role/:id'   =>'local_admins#show_worker_for_change_role',:via => :get    ,:as=>:show_worker_for_change_role
        match '/local_admins/show_AGO_for_change_role/:id'   =>'local_admins#show_AGO_for_change_role',:via => :get    ,:as=>:show_AGO_for_change_role

      end

      resources :main_local_admins do
        get "autocomplete_country_detail_name", :on => :collection
      end

      as :main_local_admins do
        match '/main_local_admin/all_users'   =>'main_local_admins#all_users',:via => :get
        match '/main_local_admin/information/:id'   =>'main_local_admins#show_user_to_main_local_admin',:via => :get ,:as=>:show_user_to_main_local_admin
        match '/main_local_admin/edit/:id'   =>'main_local_admins#edit_user_info_mla',:via => :get ,:as=>:edit_user_info_mla
        match '/main_local_admin/update/:id'   =>'main_local_admins#update_user_info_by_mla',:via => :post ,:as=>:update_user_info_by_mla
        match '/main_local_admin/suspend/:id'   =>'main_local_admins#suspend_user_by_mla',:via => :get    ,:as=>:suspend_user_by_mla
        match '/main_local_admin/ideas_belonging_to_users'   =>'main_local_admins#ideas_belonging_to_users',:via => :get
        match '/main_local_admin/change_idea_status_by_mla/:id'   =>'main_local_admins#change_idea_status_by_mla',:via => :get    ,:as=>:change_idea_status_by_mla
        match '/main_local_admin/listing_good_ideas'   =>'main_local_admins#listing_good_ideas',:via => :get
        match '/main_local_admin/listing_projects'   =>'main_local_admins#listing_projects',:via => :get
        match '/main_local_admin/canceled_user_account/:id'   =>'main_local_admins#canceled_user_account',:via => :get    ,:as=>:canceled_user_account

      end
    end
  end


  resources :business_groups do
    get "related_ideas", :on => :collection
    get "my_keys", :on=> :collection
  end
  resources :main_admin_group_owners do
    get "related_ideas", :on => :collection
    get "change_ownership" , :on => :collection
    post "changed" , :on => :collection
  end
  resources :admin_group_owners do
    get "view_all_workers" ,:on => :collection
    get "all_my_admin_group_workers" ,:on => :collection
    get "related_ideas", :on => :collection
    get "my_keys", :on=> :collection
    get "show_admin_group", :on => :member
    get "edit_admin_group", :on => :member
    post "update_admin_group", :on=> :member
    get "delete_admin_group", :on => :member
    get "change_admin_group_status", :on => :member
    get "sago_home", :on => :member
    resources :admin_group_workers do
      post "create_admin_group_worker" , :on => :collection
      get "new_admin_group_workers", :on => :collection
    end
  end

  resources :consultant_workers do
    get "change_worker_to_consultant_worker" ,:on => :member
  end



  resources :ideas do
    collection do
      get 'show_good_idea'
      get 'my_own_project'
    end
    member do
      get :make_it_good
      get :decline
      get :reject
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

  #resource :users do
  #  member do
  #    get "to_worker"
  #  end
  #end
  as :user do
    match '/user/confirmation' => 'confirmations#update', :via => :put, :as => :update_user_confirmation
    match '/user/management'   =>'users#user_management',:via => :get
    match '/user/information/:id'   =>'users#show_user_to_local_admin',:via => :get ,:as=>:show_user_to_local_admin
    match '/user/edit/:id'   =>'users#edit_user_info',:via => :get ,:as=>:edit_user_info
    match '/user/update/:id'   =>'users#update_user_info',:via => :post ,:as=>:update_user_info
    match '/user/suspend/:id'   =>'users#suspend_user',:via => :get    ,:as=>:suspend_user
    match '/user/to_worker/:id'   =>'users#to_worker',:via => :get  , :as => :to_worker
    match '/user/to_admin_group_worker/:id'   =>'users#to_admin_group_worker',:via => :get  , :as => :to_AGW
    match '/user/to_business_group_owner/:id'   =>'users#to_business_group_owner',:via => :get  , :as => :to_BGO
    match '/user/canceled_user_account/:id'   =>'users#canceled_user_account',:via => :get    ,:as=>:canceled_user_account
    match '/user/admin_group_list'   =>'users#admin_group_list',:via => :get

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
    get "/autocomplete_country_detail_name" ,:to=>"registrations#autocomplete_country_detail_name"
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


  #as :local_admins do
  #  match '/local_admins/show_local_admin'   =>'local_admins#show_local_admin',:via => :get
  #  match '/local_admins/change_admin_role/:id'   =>'local_admins#change_admin_role',:via => :get    ,:as=>:change_admin_role
  #  match '/local_admins/new_local_admin'   =>'local_admins#new_local_admin',:via => :get
  #  match '/local_admins/create_local_admin'   =>'local_admins#create_local_admin',:via => :post
  #  match '/local_admins/ideas_belonging_to_country_users'   =>'local_admins#ideas_belonging_to_country_users',:via => :get
  #  match '/local_admins/change_idea_status_by_la/:id'   =>'local_admins#change_idea_status_by_la',:via => :get    ,:as=>:change_idea_status_by_la
  #  match '/local_admins/listing_good_ideas'   =>'local_admins#listing_good_ideas',:via => :get
  #  match '/local_admins/listing_projects'   =>'local_admins#listing_projects',:via => :get
  #  match '/local_admins/edit/:id'   =>'local_admins#edit_user_info_from_la',:via => :get ,:as=>:edit_user_info_from_la
  #  match '/local_admins/update/:id'   =>'local_admins#update_user_info_from_la',:via => :post ,:as=>:update_user_info_from_la
  #  match '/local_admins/suspend/:id'   =>'local_admins#suspend_user_info_from_la',:via => :get    ,:as=>:suspend_user_info_from_la
  #  match '/local_admins/canceled_user_account/:id'   =>'local_admins#canceled_user_account_from_la',:via => :get    ,:as=>:canceled_user_account_from_la
  #  # match '/local_admins/listing_all_the_workers'   =>'local_admins#listing_all_the_workers',:via => :get
  #  match '/local_admins/listing_all_the_agos'   =>'local_admins#listing_all_the_agos',:via => :get
  #  match '/local_admins/chenge_worker_role/:id'   =>'local_admins#chenge_worker_role',:via => :get    ,:as=>:chenge_worker_role
  #  match '/local_admins/change_ago_to_mago/:id'   =>'local_admins#change_ago_to_mago',:via => :get    ,:as=>:change_ago_to_mago
  #end

  #as :main_local_admin do
  #  match '/main_local_admin/users_from_not_any_country'   =>'main_local_admin#users_from_not_any_country',:via => :get
  #  match '/main_local_admin/information/:id'   =>'main_local_admin#show_user_to_main_local_admin',:via => :get ,:as=>:show_user_to_main_local_admin
  #  match '/main_local_admin/edit/:id'   =>'main_local_admin#edit_user_info',:via => :get ,:as=>:edit_user_info
  #  match '/main_local_admin/update/:id'   =>'main_local_admin#update_user_info',:via => :post ,:as=>:update_user_info
  #  match '/main_local_admin/suspend/:id'   =>'main_local_admin#suspend_user',:via => :get    ,:as=>:suspend_user
  #  match '/main_local_admin/ideas_belonging_to_users'   =>'main_local_admin#ideas_belonging_to_users',:via => :get
  #  match '/main_local_admin/change_idea_status_by_mla/:id'   =>'main_local_admin#change_idea_status_by_mla',:via => :get    ,:as=>:change_idea_status_by_mla
  #  match '/main_local_admin/listing_good_ideas'   =>'main_local_admin#listing_good_ideas',:via => :get
  #  match '/main_local_admin/listing_projects'   =>'main_local_admin#listing_projects',:via => :get
  #  match '/main_local_admin/canceled_user_account/:id'   =>'main_local_admin#canceled_user_account',:via => :get    ,:as=>:canceled_user_account
  #
  #end


  resource :global_admins  do
    #collection do
    #  get :new_local_admin
    #end
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