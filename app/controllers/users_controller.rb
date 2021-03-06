class UsersController < ApplicationController
  skip_before_action :authenticate

  def create
    @user = User.new(user_params)
    if @user.save
      user_params.merge!(_id: @user._id)
      jwt_token = Auth.encode(user_params)
      cookies["jwt_token"] = jwt_token
      respond_to do |format|
        format.html { redirect_to todo_lists_path }
      end
    else
      respond_to do |format|
        format.html { redirect_to root_path, alert: @user.errors }
      end
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

end
