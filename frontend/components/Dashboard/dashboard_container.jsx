import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import Dashboard from './dashboard';

const mSTP = state => {
    return {
        friends: Object.values(state.entities.users)[0].friends
    }
}

const mDTP = dispatch => {
    debugger
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(Dashboard);