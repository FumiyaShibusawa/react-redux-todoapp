class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      respond_to do |format|
        format.html
        format.json { render json: { jwt_authorized: true } }
      end
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end

end
