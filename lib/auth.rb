require "jwt"

ALGORITHM = "HS256"

class Auth
  class << self
    def encode(payload)
      JWT.encode(payload, auth_key, ALGORITHM)
    end

    def decode(token)
      JWT.decode(token, auth_key, ALGORITHM)
    end

    def auth_key
      Rails.application.credentials.secret_key_base
    end
  end
end
