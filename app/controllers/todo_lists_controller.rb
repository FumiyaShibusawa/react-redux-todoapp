class TodoListsController < ApplicationController
  def index
    todo_list_data = JSON.parse TodoList.all.to_json(include: :todos)
    respond_to do |format|
      format.html
      format.json { render json: todo_list_data }
    end
  end

  def create
    todo_list = TodoList.new(todo_list_params)
    if todo_list.save
      todo_list_data = JSON.parse(TodoList.all.to_json(include: :todos))
      respond_to do |format|
        format.html
        format.json { render json: todo_list_data }
      end
    end
  end

  def destroy
    todo_list = TodoList.find(params[:id])
    if todo_list.destroy
      todo_list_data = JSON.parse(TodoList.all.to_json(include: :todos))
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
