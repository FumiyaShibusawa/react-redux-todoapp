class TodoListsController < ApplicationController
  def index
  end

  def create
    todo_list = TodoList.new(todo_list_params)
    if todo_list.save!
      todo_list_data = JSON.parse(todo_list.to_json)
      respond_to do |format|
        format.html
        format.json { render json: todo_list_data }
      end
    end
  end

  private
  def todo_list_params
    params.require(:todo_list).permit(:name)
  end
end
