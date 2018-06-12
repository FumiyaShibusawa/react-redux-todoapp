class SessionsController < ApplicationController
  def index
  end

  def create
    # TODO: JWT認証で発行したトークンをdecodeして取得したuser_idで検索するようにする
    @user = User.find_by(email: session_params[:email])
    if @user
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
  def session_params
    params.require(:session).permit(:email, :password)
  end
end
