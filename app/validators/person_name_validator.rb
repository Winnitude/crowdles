class PersonNameValidator < ActiveModel::EachValidator
  include NameValidator
  
  def validate_each(record,attribute,value)
    record.errors[attribute] << "is too long" if value && value.size > max_length    
    record.errors[attribute] << "is too short" if value && value.size < min_length
    record.errors[attribute] << "has invalid characters" unless value =~ /^[a-zA-Z\-\ ]*?$/
  end
end
