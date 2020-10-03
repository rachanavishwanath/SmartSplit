class Api::FriendsController < ApplicationController

    def index
        @allFriends = Friend.all
        render :index
    end

    def create
        @user_id = User.find_by(email: params[:friend][:email])
        #debugger
        if @user_id
            #debugger
           @friend = Friend.new(profile_id: current_user.id, friend_id: @user_id.id)
           if @friend.valid?
            #debugger
                @allFriends = Friend.all
                #@friend.save!
                render :index
                #render json: ['Added friend to your list'], status: 200
           else
            #debugger
                render json: ['You are already friends!'], status: 200
           end
        else
            #debugger
            render json: ['User doesn\'t exist'], status: 422
        end
    end

    def destroy
    end

    private
    def friend_params
        params.require(:friend).permit(:email, :name)
    end

end