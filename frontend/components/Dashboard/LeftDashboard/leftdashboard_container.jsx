import { connect}from 'react-redux';
import LeftDashboard from './left_dashboard';
import { openModal, closeModal } from '../../../actions/modal_actions';
import {deleteFriend} from '../../../actions/friend_action';

const mSTP = (state, ownProps) => {
    console.log(ownProps)
    return {
        friends: Object.values(state.entities.users)[0].friends,
        push: ownProps.push
    }
}

// needs addFriend action add-friend
const mDTP = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        deleteFriend: friendId => dispatch(deleteFriend(friendId))
    }
}

export default connect(mSTP, mDTP)(LeftDashboard);