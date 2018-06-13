class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate

  require "auth"

  def authenticate
    redirect_to root_path, notice: "not authorized" unless current_user
  end

  def current_user
    if jwt_token.present?
      decoded_token = Auth.decode(jwt_token)
      @current_user = User.where(_id: decoded_token[0]["_id"]).first
    end
  end
  def jwt_token
    return nil if request.headers["Authentication"].nil?
    request.headers["Authentication"].split(" ").last
  end
end
