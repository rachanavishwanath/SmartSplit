import * as ExpenseApiUtil from '../util/expenses_util';
import { receiveCurrentUser} from './session_action';

export const RECEIVE_ALL_EXPENSES = 'RECEIVE_ALL_EXPENSES';
export const RECEIVE_EXPENSE = 'RECEIVE_EXPENSES';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveAllExpenses = expenses => {
    return  {
        type: RECEIVE_ALL_EXPENSES,
        expenses
    }
}

const receiveExpense = expense => {
    return {
        type: RECEIVE_EXPENSE,
        expense
    }
}

const removeExpense = expenseId => {
    return {
        type: REMOVE_EXPENSE,
        expenseId
    }
}

const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const fetchAllExpenses = (friend_id) => dispatch => {
    return ExpenseApiUtil.fetchallExpenses(friend_id).then(expenses => {
        return dispatch(receiveAllExpenses(expenses))
    }, response => {
            return dispatch(receiveErrors(response.responseJSON))
    })
}

export const fetchExpense = expenseId => dispatch => {
    return ExpenseApiUtil.fetchExpense(expenseId).then(expense => {
        return dispatch(receiveExpense(expense))
    }, response => {
            return dispatch(receiveErrors(response.responseJSON))
    })
}

export const createExpense = expense => dispatch => {
    return ExpenseApiUtil.createExpense(expense).then(data => {
        dispatch(receiveCurrentUser(data.user))
        return dispatch(receiveExpense(data.expense))
    }, response => {
        return dispatch(receiveErrors(response.responseText))
    })
}

export const updateExpense = expense => dispatch => {
    return ExpenseApiUtil.updateExpense(expense).then(data => {
        dispatch(receiveCurrentUser(data.user))
        return dispatch(receiveExpense(data.expense))
    }, response => {
        return dispatch(receiveErrors(response.responseJSON))
    })
}

export const deleteExpense = (expenseId) => dispatch => {
    let id = expenseId;
    return ExpenseApiUtil.deleteExpense(expenseId).then((user) => {
        dispatch(receiveCurrentUser(user));
        return dispatch(removeExpense(id))
    }, response => {
        return dispatch(receiveErrors(response.responseJSON))
    })
}