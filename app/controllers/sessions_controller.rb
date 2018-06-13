class SessionsController < ApplicationController
  skip_before_action :authenticate, only: [:index]

  def index
  end

  def create
    # TODO: JWT認証で発行したトークンをdecodeして取得したuser_idで検索するようにする
    decoded_token = Auth.decode(jwt_token)
    if current_user.password == decoded_token[0]["password"]
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
    params.require(:session).permit(:name, :email, :password)
  end
end
