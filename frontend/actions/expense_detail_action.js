import * as ExpenseDetailUtil from '../util/expense_detail_util';

export const RECEIVE_ALL_EXPENSE_DETAILS = 'RECEIVE_ALL_EXPENSE_DETAILS';
export const RECEIVE_EXPENSE_DETAIL = 'RECEIVE_EXPENSE_DETAIL';

const receiveAllExpenseDetails = expenseDetails => {
    return {
        type: RECEIVE_ALL_EXPENSE_DETAILS,
        expenseDetails
    }
}

const receiveExpenseDetail = expenseDetail => {
    return {
        type: RECEIVE_EXPENSE_DETAIL,
        expenseDetail
    }
}

export const fetchAllExpenseDetails = () => dispatch => {
    return ExpenseDetailUtil.fetchExpenseDetails().then(eds => {
        return dispatch(receiveAllExpenseDetails(eds))
    })
}

export const createExpenseDetail = expense_detail => dispatch => {
    return ExpenseDetailUtil.createExpenseDetail(expense_detail).then((expense_detail) => {
        return dispatch(receiveExpenseDetail(expense_detail))
    })
}

export const updateExpenseDetail = expense_detail => dispatch => {
    return ExpenseDetailUtil.updateExpenseDetail(expense_detail).then((expense_detail) => {
        return dispatch(receiveExpenseDetail(expense_detail))
    })
}