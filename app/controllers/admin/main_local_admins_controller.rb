class Admin::MainLocalAdminsController < ApplicationController

  before_filter :get_all_users
  autocomplete :country, :name

  def all_users

  end

  def show_user_to_main_local_admin
    @user = User.find(params[:id])
  end

  def suspend_user_by_mla
    @user = User.find(params[:id])
    toggle_user @user
    redirect_to :back
  end

  def canceled_user_account
    @user = User.find(params[:id])
    canceled_user @user
    redirect_to :back
  end


  def edit_user_info_mla
    @user = User.find(params[:id])
  end

  def update_user_info_by_mla
    params[:user][:profile][:birth_date] = format_birth_date(params[:user][:profile][:birth_date])
    @user = User.find(params[:id])
    @user.update_user_from_loca_admin params[:user]
    #@user.update_attributes(params[:user])
    redirect_to main_local_admins_all_users_path
  end

  def  ideas_belonging_to_users

  end

  def change_idea_status_by_mla
    @idea = Idea.find(params[:id])
    change_idea_status @idea
    redirect_to :back
  end

  def  listing_good_ideas
     @good_ideas = Idea.all.select{|idea| @user_from_not_any_countries.map(&:id).include?(idea.user_id) && idea.type == "Good idea"}
  end

  def  listing_projects
    @projects = Idea.all.select{|idea| @user_from_not_any_countries.map(&:id).include?(idea.user_id) && idea.type == "Project"}
  end

  private

  def get_all_users
    #country = User.where(:role=>"Local Admin").map(&:country)
   # users_not_beloning_to_any_countries = User.all.select{|u| country.exclude?(u.country)}
    #@user_from_not_any_countries = users_not_beloning_to_any_countries.select{|user| ["Global Admin","Main Local Admin"].exclude?(user.role)}
    @user_from_not_any_countries = User.all.select{|user|  user.role == "User"}

  end


end
