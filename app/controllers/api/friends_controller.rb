class Api::FriendsController < ApplicationController

    def index
        @allFriends = Friend.includes(:friend)
        render :index
    end

    def create
        @user_id = User.find_by(email: params[:friend][:email])
        if @user_id
           @friend = Friend.new(profile_id: current_user.id, friend_id: @user_id.id)
           if @friend.valid?
                @friend.save!
                @user = current_user
                msg = UserMailer.add_friend_email(current_user, @friend)
                msg.deliver_later
                render 'api/users/show'
           else
                render json: ['You are already friends!'], status: 200
           end
        else
            render json: ['User doesn\'t exist'], status: 422
        end
    end

    def destroy
        @friend = Friend.find(params[:id])
        @friend.destroy
        @user = current_user
        render 'api/users/show'
    end

    private
    def friend_params
        params.require(:friend).permit(:email, :name)
    end

end