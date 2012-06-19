class Language
  include Mongoid::Document
  field :name,              :type => String

  def self.is_fake (name)
   language = where(:name => name).first
    !language.present?
  end
end
