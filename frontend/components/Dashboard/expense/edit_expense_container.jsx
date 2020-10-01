import React from 'react';
import { connect } from 'react-redux';
import { updateExpense } from '../../../actions/expense_action';

const mSTP = (state, ownProps) => {
    const expenseId = ownProps.expense.id
    return {
        expenseId,
        expense: state.entities.expenses[expenseId],
        formType = 'Update'
    }
}

const mDTP = dispatch => {
    return {
        processForm: (expense) => dispatch(updateExpense(expense)),
    }
}