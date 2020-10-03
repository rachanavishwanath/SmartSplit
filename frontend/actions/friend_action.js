import * as FriendAPIUtil from '../util/friends_util';

export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
export const RECEIVE_SUCCESS_MESSAGE = 'RECEIVE_SUCCESS_MESSAGE';
export const RECEIVE_FAIL_MESSAGE = 'RECEIVE_FAIL_MESSAGE';
import { receiveCurrentUser } from './session_action';

const receiveAllFriends = friends => {
    return {
        type: RECEIVE_ALL_FRIENDS,
        friends
    }
}

const receiveSuccess = message => {
    return {
        type: RECEIVE_SUCCESS_MESSAGE,
        message
    }
}

export const fetchAllFriends = () => dispatch => {
    return FriendAPIUtil.fetchAllFriends().then(friends => {
        return dispatch(receiveAllFriends(friends))
    })
}

export const addFriend = friend => dispatch => {
    debugger
    return FriendAPIUtil.createFriend(friend).then(friends => {
        debugger
        return dispatch(receiveAllFriends(friends))
    }, response => {
        debugger
        return dispatch(receiveSuccess(response.responseJSON))
    })
}
