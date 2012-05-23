class LocalAdminsController < ApplicationController
  before_filter :should_be_GA ,:only=>[:new_local_admin,:create_local_admin]

  def show_local_admin
      @local_admins = User.where(:role => "Local Admin").to_a
  end

  def change_admin_role
    @user = User.find(params[:id])
    toggle_admin @user
    redirect_to local_admins_show_local_admin_path
  end

  def new_local_admin
    @la= User.new

  end

  def create_local_admin
   @la = User.new params[:user]
   value = @la.set_la_attributes
   @profile =@la.build_profile params[:profile]
   if @la.save && @profile.save
     #redirect_to root_path ,:notice => "Successfully created"
     LaMailer.welcome_email(@la,@profile,value).deliver
     redirect_to root_path ,:notice => "Successfully created"
   else
     render :json => @la.errors
   end
  end

  def edit_user_info_from_la
    @user = User.find(params[:id])
  end

  def canceled_user_account_from_la
    @user = User.find(params[:id])
    canceled_user @user
    redirect_to :back
  end

  def suspend_user_from_la
    @user = User.find(params[:id])
    toggle_user @user
    redirect_to :back
  end

  def update_user_info_from_la
    params[:user][:profile][:birth_date] = format_birth_date(params[:user][:profile][:birth_date])
    @user = User.find(params[:id])
    @user.update_user_from_loca_admin params[:user]
    #@user.update_attributes(params[:user])
    redirect_to user_management_path
  end


  def ideas_belonging_to_country_users
    @idea = Idea.all
  end

  def change_idea_status_by_la
    @idea = Idea.find(params[:id])
    change_idea_status @idea
    redirect_to :back
  end

  def listing_good_ideas
    @good_ideas = Idea.where(:type=>"Good idea").to_a
  end

  def listing_projects
    @projects = Idea.where(:type=>"Project").to_a
  end

  def listing_all_the_workers
    @workers = User.where(:role=>"Worker").to_a
  end

  def listing_all_the_agos
    @AGOS = User.where(:role=>"Admin Group Owner").to_a
  end

  def chenge_worker_role
    @user = User.find(params[:id])
    change_to_AGO @user
    LaMailer.changed_role(@user).deliver
    redirect_to :back
  end

  def change_ago_to_mago
    @user = User.find(params[:id])
    change_to_MAGO @user
    LaMailer.changed_role(@user).deliver
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
    user.save
  end

end
