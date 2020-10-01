class Api::FriendsController < ApplicationController

    def index
        @allFriends = Friend.all
        render :index
    end

    def create
        @user_id = User.find_by(email: params[:email])
        @friend = Friend.new
        @friend.profile_id = current_user.id
        @friend.friend_id = @user_id
    end

    def destroy
    end

    private
    def friend_params
        params.require(:friend).permit(:email)
    end

end