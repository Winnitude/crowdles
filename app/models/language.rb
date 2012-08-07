class Language
  include Mongoid::Document
  field :name,              :type => String

  def self.is_fake (name)
    if name.present? == false
      return false
    else
      language = where(:name => name).first
      !language.present?
    end
  end
end


