import { RECEIVE_ERROR_MESSAGE, RECEIVE_SUCCESS_MESSAGE } from '../actions/friend_action';

export default (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ERROR_MESSAGE:
            return action.errors;
        case RECEIVE_SUCCESS_MESSAGE:
            return action.errors;

        default:
            return state;
    }
}