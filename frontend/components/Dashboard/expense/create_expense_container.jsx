import {connect} from 'react-redux';
import { createExpense } from '../../../actions/expense_action';
import { openModal, closeModal } from '../../../actions/modal_actions';
import ExpenseForm from './expenseForm';
import { fetchAllCategories } from '../../../actions/category_actions';
import { createExpenseDetail } from '../../../actions/expense_detail_action';
import { fetchAllFriends } from '../../../actions/friend_action';
import { category, defCa } from '../../../reducers/selectors';

const mSTP = state => {
    return {
        expense: { 
            name: '',
            desc: '',
            amount: '',
            category_id: defCa(state.entities.categories),
            payable_type: 'Friend',
            payable_id: null,
            split_type: 'equally',
            active: false,
            date: new Date(),
            openCatModal: false,
            openEDModal: false,
            show: false,
            openCal: false
        },
        expense_detail: {
            expense_id: null,
            paid_by: state.session.id,
            amount_paid: null
        },
        users: state.entities.users,
        friends: Object.values(state.entities.users)[0].friends,
        categories: category(state.entities.categories),
        friendsships: state.entities.friendships,
    }
}

const mDTP = dispatch => {
    return {
        processForm: expense => dispatch(createExpense(expense)),
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal(modal)),
        fetchAllCategories: () => dispatch(fetchAllCategories()),
        fetchAllFriends: () => dispatch(fetchAllFriends()),
        createExpenseDetail: (expenseDetail) => dispatch(createExpenseDetail(expenseDetail))
    }
}

export default connect(mSTP, mDTP)(ExpenseForm);

