module UsersHelper

  def nikname profile
    profile.first_name[0,3]+profile.last_name[0,3]+profile.birth_date.day.to_s
  end


end
