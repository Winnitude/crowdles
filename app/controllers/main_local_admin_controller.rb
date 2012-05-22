class MainLocalAdminController < ApplicationController

  before_filter :users_not_beloning_to_any_countries

  def users_from_not_any_country

  end

  def show_user_to_main_local_admin
    @user = User.find(params[:id])
  end

  def suspend_user
    @user = User.find(params[:id])
    toggle_user @user
    redirect_to main_local_admin_users_from_not_any_country_path
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
    redirect_to main_local_admin_ideas_belonging_to_users_path
  end

  private

  def users_not_beloning_to_any_countries
    #country = User.where(:role=>"Local Admin").map(&:country)
   # users_not_beloning_to_any_countries = User.all.select{|u| country.exclude?(u.country)}
    #@user_from_not_any_countries = users_not_beloning_to_any_countries.select{|user| ["Global Admin","Main Local Admin"].exclude?(user.role)}
    @user_from_not_any_countries = User.all.select{|user| ["Global Admin","Main Local Admin","Local Admin"].exclude?(user.role)}
  end


end
