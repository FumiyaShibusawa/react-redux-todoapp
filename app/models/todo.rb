class Todo
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :todo_list

  field :name, type: String
end
