class Api::SessionsController < ApplicationController
  
  def create 
    @user = User.find_by_credentials(
      params[:user][:username], 
      params[:user][:password]
    )

    if @user 
      login!(@user)
      render :show
    else 
      render json: ['Invalid Credentials'], status: 401
    end 
  end 

  def destroy 
    if !current_user.nil?
      logout!
      render json: {}
    else 
      render json: ['No one to logout'], status: 404
    end 
  end 
end 