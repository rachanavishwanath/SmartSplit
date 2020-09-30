import {connect} from 'react-redux';
import { fetchAllExpenses, deleteExpense } from '../../../actions/expense_action';
import { closeModal, openModal } from '../../../actions/modal_actions';
import AllExpenses from './all_expenses';
import { logout } from '../../../actions/session_action';
import { fetchAllExpenseDetails } from '../../../actions/expense_detail_action';

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        expenses: Object.values(state.entities.expenses),
        // friends: state.entities.currentUser.friends,
        expenseDetails: state.entities.exenseDetails,
    }
}

const mDTP = dispatch => {
    return {
        fetchAllExpenses: () => dispatch(fetchAllExpenses()),
        logout: () => dispatch(logout()),
        closeModal: () => dispatch(closeModal()),
        deleteExpense: (expenseId) => dispatch(deleteExpense(expenseId)),
        openModal: (modal) => dispatch(openModal(modal)),
        fetchAllExpenseDetails: () => dispatch(fetchAllExpenseDetails())
    }
}

export default connect(mSTP, mDTP)(AllExpenses);