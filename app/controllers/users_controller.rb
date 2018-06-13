class UsersController < ApplicationController
  skip_before_action :authenticate

  def create
    @user = User.new(user_params)
    if @user.save
      respond_to do |format|
        format.html { redirect_to todo_lists_path }
      end
    else
      respond_to do |format|
        format.html { redirect_to root_path, notice: @user.errors }
      end
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

end
