#server "my_fancy_server.com", :app, :web, :db, :primary => true
set :deploy_to, "/var/www/crowdles_staging"
set :rails_env, "staging"
set :scm, :git
set :repository ,"git@github.com:rampapps/crowdles.git"
set :branch, "develop"
set :scm_verbose, true

#location = "50.57.168.13"

role :app, location
role :web, location
role :db, location, :primary => true

set :user , ''
set :password, ""
set :ssh_options, {:forward_agent => true}

set :default_run_options ,{:pty => true}
set :keep_releases, 5