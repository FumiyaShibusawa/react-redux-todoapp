class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate

  require "auth"
  require "logger"

  def authenticate
    if current_user.nil?
      render json: "not authorized" and return if request.format == "application/json"
      redirect_to root_path, notice: "not authorized"
    end
  end

  def current_user
    if jwt_token.present?
      decoded_token = eval Auth.decode(jwt_token)[0]
      @current_user = User.where(email: decoded_token["email"]).first
    end
  end

  def jwt_token
    case request.format
    when "application/json"
      return nil if request.headers["Authentication"].nil?
      jwt_token = request.headers["Authentication"].split(" ").last
      jwt_token.slice!(/jwt_token=/)
    when "text/html"
      return nil if cookies["jwt_token"].nil?
      jwt_token = cookies["jwt_token"]
    end
    jwt_token
  end

end
