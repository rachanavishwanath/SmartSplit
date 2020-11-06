class Api::UsersController < ApplicationController
    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token
    
    def create
        @user = User.new(user_params)
        if @user.live_user == false
            if @user.save!
                msg = UserMailer.invitation_email(current_user, @user)
                msg.deliver_later
                render :show
            else
                render json: @user.errors.full_messages, status: 422
            end
        else
            in_db = User.find_by(email: @user.email)
            if (in_db && in_db.live_user == false) 
                in_db.name = @user.name
                in_db.password = @user.password
                in_db.live_user = @user.live_user
                in_db.save
                if login(in_db)
                    @user = in_db
                    render :show
                else
                    render json: @user.errors.full_messages, status: 422
                end
            else
                if @user.save
                    login(@user)
                    render :show
                else
                    render json: @user.errors.full_messages, status: 422
                end
            end
        end
    end

    def show
        @user = current_user
        render :show
    end

    private

    def user_params
        params.require(:user).permit(:name, :email, :password, :live_user)
    end
end