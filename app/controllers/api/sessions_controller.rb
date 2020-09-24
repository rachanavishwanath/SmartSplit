class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email], 
            params[:user][:password]
            )
        if !@user
            render json: ['Whoops! We couldn’t find an account for that email address and password. Maybe you’ve forgotten your password?'], status: 404
        else
            login(@user)
            render 'api/users/show'
        end
    end

    def destroy
        if !current_user
            render json: { status: 404}
        else
            logout
            render json: {}
        end
    end
end