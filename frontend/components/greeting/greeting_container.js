import { connect } from 'react-redux';
import { logout } from '../../actions/session_action';
import { openModal, closeModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(Greeting);