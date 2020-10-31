import {connect} from 'react-redux';
import { createExpense } from '../../../actions/expense_action';
import { openModal, closeModal } from '../../../actions/modal_actions';
import ExpenseForm from './expenseForm';
import { fetchAllCategories } from '../../../actions/category_actions';
import { createExpenseDetail } from '../../../actions/expense_detail_action';
import { fetchAllFriends } from '../../../actions/friend_action';
import { category, defCa } from '../../../reducers/selectors';
import { createAD } from '../../../actions/ad_actions';
import { fetchCurrentUser } from '../../../actions/session_action';
import { fetchAllExpenses } from '../../../actions/expense_action';

const mSTP = (state, ownProps) => {
    let friendName = '';
    let friendId = '';
    let showSecondaryFields = false;
    if (state.ui.modal.friendId) {
        friendName = state.ui.modal.friendName;
        friendId = state.ui.modal.friendId;
        showSecondaryFields = true;
    }
    return {
        expense: { 
            name: friendName,
            desc: '',
            amount: '',
            category_id: defCa(state.entities.categories),
            payable_type: 'Friend',
            payable_id: parseInt(friendId),
            split_type: 'equally',
            active: showSecondaryFields,
            date: new Date(),
            openCatModal: false,
            openEDModal: false,
            show: false,
            openCal: false,
            openNotes: false,
            openInviteFriend: false,
            openSplitType: false,
            expense_id: null,
            paid_by: state.session.id,
            amount_paid: null,
            author_id: state.session.id,
            notes: '',
            asset_url: '',
            assetFile: null,
        },
        users: state.entities.users,
        friends: Object.values(state.entities.users)[0].friends,
        categories: category(state.entities.categories),
        friendsships: state.entities.friendships,
        formType: 'Create'
    }
}

const mDTP = dispatch => {
    return {
        fetchAllExpenses: (friendId) => dispatch(fetchAllExpenses(friendId)),
        processForm: expense => dispatch(createExpense(expense)),
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal(modal)),
        fetchAllCategories: () => dispatch(fetchAllCategories()),
        fetchAllFriends: () => dispatch(fetchAllFriends()),
        createAD: (ad) => dispatch(createAD(ad)),
        fetchCurrentUser: () => dispatch(fetchCurrentUser()),
        createExpenseDetail: (expenseDetail) => dispatch(createExpenseDetail(expenseDetail))
    }
}

export default connect(mSTP, mDTP)(ExpenseForm);

