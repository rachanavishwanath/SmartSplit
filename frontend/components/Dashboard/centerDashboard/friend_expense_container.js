import { connect } from 'react-redux';
import FriendExpense from './friend_expenses';
import { openModal } from '../../../actions/modal_actions';
import { fetchAllExpenses, deleteExpense } from '../../../actions/expense_action';

const mSTP = (state, ownProps) => {
    console.log(ownProps);
    const friendId = ownProps.match.params.friend_id;
    return {
        friends: Object.values(state.entities.users)[0].friends,
        friendId,
        expenses: Object.values(state.entities.expenses),
    }
}

const mDTP = dispatch => {
    return {
        fetchAllExpenses: friendId => dispatch(fetchAllExpenses(friendId)),
        openModal: modal => dispatch(openModal(modal)),
        deleteExpense: expenseId => dispatch(deleteExpense(expenseId))
    }
}

export default connect(mSTP, mDTP)(FriendExpense);