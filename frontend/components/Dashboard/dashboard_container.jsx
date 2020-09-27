import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import Dashboard from './dashboard';

const mDTP = dispatch => {
    debugger
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(null, mDTP)(Dashboard);