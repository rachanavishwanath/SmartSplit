import { RECEIVE_ALL_FRIENDS } from '../actions/friend_action';

export default (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_FRIENDS:
            return action.friends

        default:
            return state;
    }
}