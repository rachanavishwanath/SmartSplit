import * as FriendAPIUtil from '../util/friends_util';

export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';

const receiveAllFriends = friends => {
    return {
        type: RECEIVE_ALL_FRIENDS,
        friends
    }
}

export const fetchAllFriends = () => dispatch => {
    debugger
    return FriendAPIUtil.fetchAllFriends().then(friends => {
        debugger
        return dispatch(receiveAllFriends(friends))
    })
}