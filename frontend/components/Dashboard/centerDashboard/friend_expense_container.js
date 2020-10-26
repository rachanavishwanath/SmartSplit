import { connect } from 'react-redux';
import FriendExpense from './friend_expenses';
import { openModal } from '../../../actions/modal_actions';
import { fetchAllExpenses, deleteExpense } from '../../../actions/expense_action';
import { fetchAllExpenseDetails } from '../../../actions/expense_detail_action';
import { fetchAllFriends } from '../../../actions/friend_action';

const mSTP = (state, ownProps) => {
    const friendId = ownProps.match.params.friend_id;
    return {
        currentUser: state.entities.users[state.session.id],
        friends: Object.values(state.entities.users)[0].friends,
        friendId,   
        expenses: Object.values(state.entities.expenses),
        expenseDetails: state.entities.exenseDetails,
    }
}

const mDTP = dispatch => {
    return {
        fetchAllExpenses: friendId => dispatch(fetchAllExpenses(friendId)),
        openModal: modal => dispatch(openModal(modal)),
        deleteExpense: expenseId => dispatch(deleteExpense(expenseId)),
        fetchAllExpenseDetails: () => dispatch(fetchAllExpenseDetails()),
        fetchAllFriends: () => dispatch(fetchAllFriends())
    }
}

export default connect(mSTP, mDTP)(FriendExpense);