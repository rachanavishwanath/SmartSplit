import { RECEIVE_ERRORS } from '../actions/expense_action';

export default (state = [], action) => {
    Object.freeze(state);
    debugger
    switch(action.type) {
        case RECEIVE_ERRORS:
            debugger
            return action.errors;

        default:
            return state;
    }
}