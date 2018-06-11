class User
  include Mongoid::Document
  include Mongoid::Timestamps

  has_many :todo_lists

  field :name, type: String
  field :email, type: String
  field :password, type: String

  validate :name, :email, presence: true
  validate :name, :email, uniqueness: true
end
