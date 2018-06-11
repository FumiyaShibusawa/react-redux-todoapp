class Todo
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :todo_list

  field :name, type: String
  field :completed, type: Boolean, default: false

  validate :name, :email, presence: true
  validate :todo_list, presence: true

end
