class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate

  require "auth"

  def authenticate
    if current_user.nil?
      render json: "not authorized" and return if request.format == "application/json"
      redirect_to root_path, notice: "not authorized"
    end
  end

  def current_user
    if jwt_token.present?
      decoded_token = Auth.decode(jwt_token)
      system("echo #{jwt_token}")
      system("echo #{decoded_token}")
      @current_user = User.where(email: decoded_token[0]["email"]).first
    end
  end

  def jwt_token
    case request.format
    when "application/json"
      return nil if request.headers["Authentication"].nil?
      jwt_token = request.headers["Authentication"].split(" ").last
    when "text/html"
      return nil if cookies["jwt_token"].nil?
      jwt_token = cookies["jwt_token"].split(" ").last
    end
    jwt_token
  end

end
