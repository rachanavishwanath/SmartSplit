import React from 'react';
import { connect } from 'react-redux';
import AddFriend from './add_friend';
import { addFriend } from '../../../actions/friend_action';
import { closeModal } from '../../../actions/modal_actions';

const mDTP = dispatch => {
    return {
        addFriend: (friend) => dispatch(addFriend(friend)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(null, mDTP)(AddFriend);