import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearErrors } from '../../actions/session_action';
import { fetching, fetched } from '../../actions/loading_actions';

const mSTP = (state, ownProps) => {
    const userId = ownProps.match.params.id;
    return {
        currentUser: state.entities.users[userId],
        formType: 'login',
        errors: state.errors
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
        startLoading: () => dispatch(fetching()),
        stopLoading: () => dispatch(fetched())
    }
}

export default connect(mSTP, mDTP)(LoginForm);