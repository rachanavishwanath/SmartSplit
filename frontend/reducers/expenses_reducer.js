import {
    RECEIVE_ALL_EXPENSES,
    RECEIVE_EXPENSE,
    REMOVE_EXPENSE
} from '../actions/expense_action';

export default (state = {}, action) => {
    Object.freeze(state);
    debugger
    switch(action.type) {
        case RECEIVE_ALL_EXPENSES:
            return action.expenses;

        case RECEIVE_EXPENSE:
            return Object.assign({}, state, { [action.expense.id]: action.expense })

        case REMOVE_EXPENSE:
            debugger
            let newState = Object.assign({}, state);
            delete newState[action.expenseId];
            return newState;
            
        default:
            return state;
    }
}

