import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session_action';

const _nullSession = Object.freeze({
    id: null
})

export default ( state = _nullSession, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return { id: action.user.id };

        case LOGOUT_CURRENT_USER:
            'You are logged out'
            return _nullSession;

        default:
            return state;
    }
}