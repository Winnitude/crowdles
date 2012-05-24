class Admin::MainLocalAdminController < ApplicationController

  before_filter :users_not_beloning_to_any_countries
  ADMIN_ARRAY = ["Global Admin","Main Local Admin","Local Admin"]

  def users_from_not_any_country

  end

  def show_user_to_main_local_admin
    @user = User.find(params[:id])
  end

  def suspend_user
    @user = User.find(params[:id])
    toggle_user @user
    redirect_to :back
  end

  def canceled_user_account
    @user = User.find(params[:id])
    canceled_user @user
    redirect_to :back
  end


  def edit_user_info
    @user = User.find(params[:id])
  end

  def update_user_info
    params[:user][:profile][:birth_date] = format_birth_date(params[:user][:profile][:birth_date])
    @user = User.find(params[:id])
    @user.update_user_from_loca_admin params[:user]
    #@user.update_attributes(params[:user])
    redirect_to main_local_admin_users_from_not_any_country_path
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

  def users_not_beloning_to_any_countries
    #country = User.where(:role=>"Local Admin").map(&:country)
   # users_not_beloning_to_any_countries = User.all.select{|u| country.exclude?(u.country)}
    #@user_from_not_any_countries = users_not_beloning_to_any_countries.select{|user| ["Global Admin","Main Local Admin"].exclude?(user.role)}
    @user_from_not_any_countries = User.all.select{|user| ADMIN_ARRAY.exclude?(user.role)}
  end


end
