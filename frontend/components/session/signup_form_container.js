import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { signup, clearErrors } from '../../actions/session_action';

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
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(SignUpForm);