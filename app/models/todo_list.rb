class TodoList
  include Mongoid::Document
  include Mongoid::Timestamps

  has_many :todos
  belongs_to :user

  field :name, type: String

  validate :name, :email, presence: true

end
