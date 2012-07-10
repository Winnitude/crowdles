module ApplicationHelper
  #require 'roles_management.rb'
  #include RolesManagement
  #  def display_flash(name,msg)
  #    case name.to_s
  #    when "notice" then
  #      content_tag :div, msg, :class => "alert alert-success"
  #    when "alert" then
  #      content_tag :div, msg, :class => "alert alert-error"
  #      content_tag :a, "x", :class => "close", :data-dismiss=>"alert"
  #    else
  #      content_tag :div, msg, :class => "alert alert-info"
  #    end
  #  end
  def flash_class(level)
    case level
      when :notice then "alert alert-info"
      when :success then "alert alert-success"
      when :error then "alert alert-error"
      when :alert then "alert alert-error"
    end
  end

  #Note: this will return currency name
  def return_curreny_name
    Currency.all.map{|currency| currency.name}
  end

  #NOTE this method will return the platform Name set by Admin
  def get_platform_default_name
    return GlobalAdminGeneralSetting.first.plateform_name
  end

  def global_admin_present
    RolesManagement::RolesManager.is_role_present?("Global Admin", current_user)&& request.url.index(ADMIN_HOST).present?
  end

  def login_or_logout
   if current_user.present?
     "sign in"
   else
     'sign out'
   end
  end

  def check_is_admin_host_present?
    request.url.index(ADMIN_HOST).present?
  end

  def is_admin_login_permitted?

  end

end
