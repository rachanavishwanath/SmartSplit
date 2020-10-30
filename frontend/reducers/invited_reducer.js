import {
    RECEIVE_USER
} from '../actions/session_action';

export default ( state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_USER:
            return { id: action.user.id };

        default:
            return state;
    }
}