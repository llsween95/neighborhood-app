class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @user = User.find_by_name(login_params[:email])
    puts 'eh'
    if @user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      # next two lines should be identicle to user controller
      puts 'yes'
      @token = encode({user_id: @user.id})
      render json: { user: @user, token: @token }, status: :ok
    else
      puts 'no'
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end
  
  # GET /auth/verify
  def verify
    render json: @current_user, status: :ok
  end


  private

  def login_params
    params.require(:auth).permit(:email, :password)
  end
end
