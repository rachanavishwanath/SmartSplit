import { connect } from 'react-redux';
import Activity from './activity';


const mSTP = state => {
    return {
        friends: Object.values(state.entities.users)[0].friends
    }
}

export default connect(mSTP, null)(Activity);