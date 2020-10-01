import React from 'react';
import { connect } from 'react-redux';
import ExpenseItems from './expense_items';
import { deleteExpense } from '../../../actions/expense_action';
const mSTP = (state, ownProps) => {
    const expenseId = ownProps.expense.id
    return {
        currentUser: state.entities.users[state.session.id],
        expenseId,
        friends: Object.values(state.entities.users)[0].friends,
    }
}

const mDTP = dispatch => {
    return {
        deleteExpense: expenseId => dispatch(deleteExpense(expenseId)),
    }
}

export default connect(mSTP, mDTP)(ExpenseItems);