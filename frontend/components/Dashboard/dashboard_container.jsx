import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchAllExpenseDetails } from '../../actions/expense_detail_action';
import Dashboard from './dashboard';

const mSTP = state => {
    return {
        friends: Object.values(state.entities.users)[0].friends,
        user: Object.values(state.entities.users)
    }
}

const mDTP = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        fetchAllExpenseDetails: () => dispatch(fetchAllExpenseDetails())
    }
}

export default connect(mSTP, mDTP)(Dashboard);