import Settle from './settle';
import {connect} from 'react-redux';
import {closeModal } from '../../../actions/modal_actions';

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(null, mDTP)(Settle);
