module ApplicationHelper
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
end
