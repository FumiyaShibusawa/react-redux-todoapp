class TodosController < ApplicationController
  def create
    todo = TodoList.find(todo_params[:todo_list_id]).todos.new(todo_params)
    if todo.save
      todo_data = JSON.parse(TodoList.all.to_json(include: :todos))
      respond_to do |format|
        format.html
        format.json { render json: todo_data }
      end
    end
  end

  def destroy
    todo = Todo.find(params[:id])
    if todo.destroy
      todo_data = JSON.parse(TodoList.all.to_json(include: :todos))
      respond_to do |format|
        format.html
        format.json { render json: todo_data }
      end
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:name, :todo_list_id)
  end
end
