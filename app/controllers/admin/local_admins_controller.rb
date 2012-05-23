class Admin::LocalAdminsController < ApplicationController
  before_filter :should_be_GA ,:only => [:create_local_admin, :new_local_admin ,:change_admin_role]
  before_filter :get_user

  def show_local_admin
    @local_admins = User.where(:role => "Local Admin").to_a
  end

  def change_admin_role
    @user = User.find(params[:id])
    toggle_admin @user
    redirect_to local_admins_show_local_admin_path
  end

  def new_local_admin
    @local_admin= User.new
  end

  def create_local_admin
    @local_admin = User.new params[:user]
    value = @local_admin.set_la_attributes
    @profile =@local_admin.build_profile params[:profile]
    if @local_admin.save && @profile.save
      #redirect_to root_path ,:notice => "Successfully created"
      LaMailer.welcome_email(@local_admin,@profile,value).deliver
      redirect_to root_path ,:notice => "Successfully created"
    else
      render :json => @local_admin.errors
    end
  end

  def all_users_globally
    @users = User.where(:role => "User").to_a
  end


  def edit_user_info_from_la
    @user = User.find(params[:id])
  end

  def canceled_user_account_from_la
    @selected_user = User.find(params[:id])
    canceled_user @selected_user
    redirect_to :back
  end

  def suspend_user_by_la
    @selected_user = User.find(params[:id])
    toggle_user @selected_user
    redirect_to :back
  end

  def update_user_info_from_la
    params[:user][:profile][:birth_date] = format_birth_date(params[:user][:profile][:birth_date])
    @user = User.find(params[:id])
    @user.update_user_from_loca_admin params[:user]
    #@user.update_attributes(params[:user])
    redirect_to user_management_path
  end

  def listing_all_the_workers
    @workers = User.where(:role=>"Worker").to_a
  end

  def listing_all_the_agos
    @AGOS = User.where(:role=>"Admin Group Owner").to_a
    @already_having_mago = User.where(:mago_la_id=>@user.id).to_a
  end

  def chenge_worker_role
    @selected_user = User.find(params[:id])
    change_to_AGO @selected_user
    LaMailer.changed_role(@selected_user).deliver
    redirect_to :back
  end

  def change_ago_to_mago
    @selected_user = User.find(params[:id])
    change_to_MAGO @selected_user
    LaMailer.changed_role(@selected_user).deliver
    redirect_to :back
  end

  private
  def toggle_admin user
    user.role = user.role == "Local Admin" ? "Main Local Admin" : "Local Admin"
    user.save
  end
  def  should_be_GA
    if current_user.role != "Global Admin"
      redirect_to root_path, :notice => "sorry you are not able to perform this activity"
    end
  end

  def change_to_AGO user
    user.role = "Admin Group Owner"
    user.save
  end

  def change_to_MAGO user
    user.role = "Main Admin Group Owner"
    user.mago_la_id = @user.id
    user.save
  end
end
