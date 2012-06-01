module UsersHelper

  def nikname profile
    sub_nikname = profile.first_name[0,3]+profile.last_name[0,3]
    profile.birth_date.blank? ? sub_nikname : sub_nikname+profile.birth_date.day.to_s
  end


end
