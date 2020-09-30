class Api::FriendsController < ApplicationController

    def index
        @allFriends = Friend.all
        render :index
    end

    def create
    end

    def destroy
    end

end