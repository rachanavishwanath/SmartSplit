import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchAllExpenseDetails } from '../../actions/expense_detail_action';
import Dashboard from './dashboard';

const mSTP = (state, ownProps) => {
    return {
        friends: Object.values(state.entities.users)[0].friends,
        user: Object.values(state.entities.users),
        push: ownProps.history.push,
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        fetchAllExpenseDetails: () => dispatch(fetchAllExpenseDetails()),
        
    }
}

export default connect(mSTP, mDTP)(Dashboard);