import React from 'react';
import { connect } from 'react-redux';
import InviteFriend from './invite_friend';
import {signUpInvitedUser} from '../../../actions/session_action';
import {addFriend} from '../../../actions/friend_action';

const mSTP = (state, ownProps) => {
    return {
        name: ownProps.name,
        currentUser: state.entities.users,
        friends: Object.values(state.entities.users)[0].friends
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        updateName: ownProps.updateName,
        handleClick: ownProps.handleClick,
        signUpInvitedUser: (user, currentUser) => dispatch(signUpInvitedUser(user, currentUser)),
        addFriend: friend => dispatch(addFriend(friend)),
        setPayableId: ownProps.setPayableId,
    }
}

export default connect(mSTP, mDTP)(InviteFriend);
