class FullNameValidator < ActiveModel::Validator
  include NameValidator
    
  def validate(record)
    [:first_name, :last_name].each do |attribute|
      value = record.send(attribute)
      record.errors[attribute] << "can't be blank" if value.blank?

      if !value.blank?      
        record.errors[attribute] << "is too short" if value.size < min_length
        record.errors[attribute] << "is too long" if value.size > max_length
        record.errors[attribute] << "has invalid characters" unless value =~ /^[a-zA-Z\-\ ]*?$/
      end
    end
  end
  
end
