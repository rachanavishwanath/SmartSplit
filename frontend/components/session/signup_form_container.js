import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { signup, login, clearErrors } from '../../actions/session_action';

const mSTP = (state, ownProps) => {
    const userId = ownProps.match.params.id;
    return {
        currentUser: state.entities.users[userId],
        formType: 'signup',
        errors: state.errors
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
        login: user => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(SignUpForm);