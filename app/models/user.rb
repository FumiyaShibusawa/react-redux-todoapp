class User
  include Mongoid::Document
  include Mongoid::Timestamps

  has_many :todo_lists

  field :name, type: String
  field :password, type: String
end
