@allFriends.each do |friend|
    json.set! friend.id do
        json.extract! friend, :id, :profile_id, :friend_id
    end
end
