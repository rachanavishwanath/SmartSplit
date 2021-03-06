import React from 'react';
import { connect } from 'react-redux';
import AddFriend from './add_friend';
import { addFriend } from '../../../actions/friend_action';
import { closeModal } from '../../../actions/modal_actions';
import {signUpInvitedUser} from '../../../actions/session_action';

const mSTP = state => {
    return {
        errors: state.errors.addFriend,
        currentUser: state.entities.users
    }
}

const mDTP = dispatch => {
    return {
        addFriend: (friend) => dispatch(addFriend(friend)),
        closeModal: () => dispatch(closeModal()),
        signUpInvitedUser: (user, currentUser) => dispatch(signUpInvitedUser(user, currentUser)),
    }
}

export default connect(mSTP, mDTP)(AddFriend);