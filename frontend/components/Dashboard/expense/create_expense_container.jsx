import {connect} from 'react-redux';
import { createExpense } from '../../../actions/expense_action';
import { closeModal } from '../../../actions/modal_actions';
import ExpenseForm from './expenseForm';

const mSTP = state => {
    return {
        expense: { 
            desc: '',
            amount: '',
            category_id: 1,
            payable_type: 'Friend',
            payable_id: 2,
            split_type: 'equally',
            active: false,
            date: '2020-09-09',
            paid_by: 14
        },
        friends: Object.values(state.entities.users)[0].friends
    }
}

const mDTP = dispatch => {
    return {
        processForm: expense => dispatch(createExpense(expense)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(ExpenseForm);

