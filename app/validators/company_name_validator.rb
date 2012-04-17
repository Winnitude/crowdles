class CompanyNameValidator < ActiveModel::EachValidator
  include NameValidator

  def validate_each(record, attribute, value)
    record.errors[attribute] << "is too long" if value && value.size > max_length    
    record.errors[attribute] << "has invalid characters" unless value =~ /^[a-zA-Z0-9\_\-\ ]*?$/
  end
end

