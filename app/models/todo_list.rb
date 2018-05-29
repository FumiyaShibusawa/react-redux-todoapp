class TodoList
  include Mongoid::Document
  include Mongoid::Timestamps

  has_many :todos

  field :name, type: String
end
