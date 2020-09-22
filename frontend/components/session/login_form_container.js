import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_action';

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
        processForm: user => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(LoginForm);