import { connect}from 'react-redux';
import LeftDashboard from './left_dashboard';

const mSTP = state => {
    return {
        friends: Object.values(state.entities.users)[0].friends
    }
}

// needs addFriend action
// const mDTP = dispatch => {

// }

export default connect(mSTP, null)(LeftDashboard);