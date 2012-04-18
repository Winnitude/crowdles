module NameValidator
  mattr_accessor :name_max_length  
  mattr_accessor :name_min_length  

  def self.name_length range
    @@name_min_length = range.min
    @@name_max_length = range.max
  end
  
  def min_length
    @@name_min_length || 2
  end  
  
  def max_length
    @@name_max_length || 30
  end  
end