class TodosController < ApplicationController
  def create
    todo = TodoList.where(user_id: current_user.id).find(todo_params[:todo_list_id]).todos.new(todo_params)
    if todo.save
      todo_data = TodoList.where(user_id: current_user.id).to_json(include: :todos)
      respond_to do |format|
        format.html
        format.json { render json: todo_data }
      end
    end
  end

  def update
    todo = TodoList.where(user_id: current_user.id).find(todo_params[:todo_list_id]).todos.find(params[:id])
    if todo.update(todo_params)
      todo_data = TodoList.where(user_id: current_user.id).to_json(include: :todos)
      respond_to do |format|
        format.html
        format.json { render json: todo_data }
      end
    end
  end

  def destroy
    todo = TodoList.where(user_id: current_user.id).find(todo_params[:todo_list_id]).todos.find(params[:id])
    if todo.destroy
      todo_data = TodoList.where(user_id: current_user.id).to_json(include: :todos)
      respond_to do |format|
        format.html
        format.json { render json: todo_data }
      end
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:name, :todo_list_id, :completed)
  end
end
