class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include BCrypt

  has_many :todo_lists

  field :name, type: String
  field :email, type: String
  field :password_hash, type: String

  validates :name, :email, presence: true
  validates :name, :email, uniqueness: true

  def password
    @password ||= Password.new(password_hash)
  end
  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

end
