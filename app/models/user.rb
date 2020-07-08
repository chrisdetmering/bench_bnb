class User < ApplicationRecord 
  attr_reader :password
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true 
  validates :password, length: {minimum: 6}, allow_nil: true
  after_initialize :ensure_session_token

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end 

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user.nil?  
      return nil 
    elsif user.is_password?(password)
      return user
    end  
  end 

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def new_session_token 
    SecureRandom.urlsafe_base64(16)
  end 

  def reset_session_token! 
    self.session_token = new_session_token
    self.save!
    self.session_token
  end 

  private 
  
  def ensure_session_token 
    self.session_token = new_session_token unless self.session_token
  end 
end 