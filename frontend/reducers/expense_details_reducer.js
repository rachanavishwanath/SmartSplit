import { RECEIVE_ALL_EXPENSE_DETAILS, RECEIVE_EXPENSE_DETAIL } from '../actions/expense_detail_action';

export default (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_EXPENSE_DETAILS: 
            return action.expenseDetails

        case RECEIVE_EXPENSE_DETAIL:
            return Object.assign({}, state, { [action.expenseDetail.id]: action.expenseDetail })

        default:
            return state;
    }
}