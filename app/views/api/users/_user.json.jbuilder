json.extract! user, :id, :name, :email #,friend_ids
json.friends(user.friends_list) do |friend|
    json.name friend[1].name
    json.friend_id friend[0]
end
#no route to test this, there could be an error here