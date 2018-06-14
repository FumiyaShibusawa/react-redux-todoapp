class TodoList
  include Mongoid::Document
  include Mongoid::Timestamps

  has_many :todos
  belongs_to :user

  field :name, type: String

  validates :name, presence: true

end
