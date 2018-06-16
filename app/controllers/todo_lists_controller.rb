class TodoListsController < ApplicationController
  before_action :authenticate

  def index
    logger = Logger.new("log/hoge.log")
    logger.info current_user
    logger.info @current_user
    todo_list_data = TodoList.where(user_id: current_user.id)
    respond_to do |format|
      format.html
      format.json { render json: todo_list_data.to_json(include: :todos) }
    end
  end

  def create
    todo_list = current_user.todo_lists.new(todo_list_params)
    if todo_list.save
      todo_list_data = TodoList.where(user_id: current_user.id)
      respond_to do |format|
        format.html
        format.json { render json: todo_list_data.to_json(include: :todos) }
      end
    end
  end

  def update
    todo_list = current_user.todo_lists.find(todo_lists_params)
    if todo_list.save
      todo_list_data = TodoList.where(user_id: current_user.id)
      respond_to do |format|
        format.html
        format.json { render json: todo_list_data.to_json(include: :todos) }
      end
    end
  end

  def destroy
    todo_list = current_user.todo_lists.find(params[:id])
    if todo_list.destroy
      todo_list_data = TodoList.where(user_id: current_user.id)
      respond_to do |format|
        format.html
        format.json { render json: todo_list_data.to_json(include: :todos) }
      end
    end
  end

  private
  def todo_list_params
    params.require(:todo_list).permit(:name)
  end
end
