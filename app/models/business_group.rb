class BusinessGroup
  include Mongoid::Document

  belongs_to :admin_group
  belongs_to :user

  field :bg_name , :type =>String
  field :bg_slogan , :type =>String
  field :bg_short_desc , :type =>String
  field :bg_desc , :type =>String
  field :group_url , :type =>String
  field :group_country , :type =>String
  field :group_language , :type =>String
  field :affiliation_key , :type => String
end
