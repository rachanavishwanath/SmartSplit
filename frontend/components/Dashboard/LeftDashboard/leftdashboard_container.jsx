import { connect}from 'react-redux';
import LeftDashboard from './left_dashboard';
import { openModal, closeModal } from '../../../actions/modal_actions';

const mSTP = state => {
    return {
        friends: Object.values(state.entities.users)[0].friends
    }
}

// needs addFriend action add-friend
const mDTP = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(LeftDashboard);