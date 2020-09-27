import {connect} from 'react-redux';
import { fetchAllExpenses, deleteExpense } from '../../../actions/expense_action';
import { closeModal } from '../../../actions/modal_actions';
import AllExpenses from './all_expenses';

const mSTP = state => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id],
        expenses: Object.values(state.entities.expenses),
    }
}

const mDTP = dispatch => {
    debugger
    return {
        fetchAllExpenses: () => dispatch(fetchAllExpenses()),
        logout: () => dispatch(logout()),
        closeModal: () => dispatch(closeModal()),
        deleteExpense: (expenseId) => dispatch(deleteExpense(expenseId))
    }
}

export default connect(mSTP, mDTP)(AllExpenses);