import {connect} from 'react-redux';
import { createExpense } from '../../../actions/expense_action';
import { openModal, closeModal } from '../../../actions/modal_actions';
import ExpenseForm from './expenseForm';
import { fetchAllCategories } from '../../../actions/category_actions';
import { category } from '../../../reducers/selectors';
const mSTP = state => {
    // console.log(state);
    return {
        expense: { 
            name: '',
            desc: '',
            amount: '',
            category_id: null,
            payable_type: 'Friend',
            payable_id: 28,
            split_type: 'equally',
            active: false,
            date: '2020-09-09',
            paid_by: state.entities.users[state.session.id],
            openCatModal: false
        },
        friends: Object.values(state.entities.users)[0].friends,
        categories: category(state.entities.categories)
    }
}

const mDTP = dispatch => {
    return {
        processForm: expense => dispatch(createExpense(expense)),
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal(modal)),
        fetchAllCategories: () => dispatch(fetchAllCategories())
    }
}

export default connect(mSTP, mDTP)(ExpenseForm);

