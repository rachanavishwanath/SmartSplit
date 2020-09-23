import {
    RECEIVE_CURRENT_USER,
    RECEIVE_SESSION_ERRORS,
    CLEAR_ERRORS
} from '../actions/session_action';

export default (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            // state.errors.session = [];
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        
        case CLEAR_ERRORS:
            return [];
            
        default:
            return state;

    }
}