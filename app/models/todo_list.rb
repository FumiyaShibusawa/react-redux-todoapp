class TodoList
  include Mongoid::Document
  field :name, type: String
end
