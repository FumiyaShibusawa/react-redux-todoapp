class SessionsController < ApplicationController
  skip_before_action :authenticate

  def index
    redirect_to todo_lists_path if current_user
  end

  def create
    @user = User.where(name: session_params["name"], email: session_params["email"]).first
    if @user && @user.password == session_params["password"]
      session_params.merge!(_id: @user._id)
      jwt_token = Auth.encode(session_params)
      cookies["jwt_token"] = jwt_token
      respond_to do |format|
        format.html { redirect_to todo_lists_path }
      end
    else
      respond_to do |format|
        format.html {
          redirect_to root_path,
          alert: "Login failed. Make sure to check your username, email, and password." }
      end
    end
  end

  def destroy
    cookies.delete :jwt_token
    redirect_to root_path, notice: "Thanks for coming! Hope you come back soon!"
  end

  private
  def session_params
    params.require(:session).permit(:name, :email, :password)
  end
end
