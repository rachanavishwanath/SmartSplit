export const fetchAllFriends = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/friends'
    })
}