import { RECEIVE_ERROR_MESSAGE } from '../actions/friend_action';

export default (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ERROR_MESSAGE:
            return action.errors;

        default:
            return state;
    }
}