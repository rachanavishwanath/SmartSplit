import React from 'react';
import { connect } from 'react-redux';
import AddFriend from './add_friend';
import { addFriend } from '../../../actions/friend_action';
import { closeModal } from '../../../actions/modal_actions';

const mSTP = state => {
    return {
        errors: state.errors.addFriend
    }
}

const mDTP = dispatch => {
    return {
        addFriend: (friend) => dispatch(addFriend(friend)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(AddFriend);