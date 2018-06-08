class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      todo_list_data = TodoList.where(user_id: user.id).to_json(include: :todos)
      respond_to do |format|
        format.html
        format.json { render json: todo_list_data }
      end
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end

end
