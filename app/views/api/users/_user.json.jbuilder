
json.extract! user, :id, :name, :email, :you_are_owed, :you_owe #,friend_ids
json.friends(user.friends_list) do |friend|
    json.profile_id friend[1].id
    json.name friend[1].name
    json.friend_id friend[0]
end
#no route to test this, there could be an error here