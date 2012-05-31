module RolesManagement
  class RolesManager
    include Mongoid::Document
    def self.add_role(role,user)
      role = Role.where(:role => role).first
      user = User.where(:_id => user._id).first
      all_user_roles = user.user_roles.collect{|i| i.role}
      puts all_user_roles.inspect
      if role.present? && !(all_user_roles.include?(role))
        puts("inside if")
        user_role = user.user_roles.new
        user_role.role = role
        user_role.save
      end
    end

    def self.remove_role(role,user)
      role = Role.where(:role => role).first
      user = User.where(:_id => user._id).first
      all_user_roles = user.user_roles.collect{|i| i.role}
      puts all_user_roles.inspect
      if  role.present? && (all_user_roles.include?(role))
        puts("inside if")
        selected_role = user.user_roles.select{|i|  i.role.present? && i.role == role}.first
        selected_role.delete
      end
    end

    def self.is_role_present?(role,user)
      role = Role.where(:role => role).first
      user = User.where(:_id => user._id).first
      all_user_roles = user.user_roles.collect{|i| i.role}
      puts all_user_roles.inspect
      if  role.present? && (all_user_roles.include?(role))
        return true
      else
        return false
      end
    end
  end

end