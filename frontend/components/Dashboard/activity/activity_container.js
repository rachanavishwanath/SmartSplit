import { connect } from 'react-redux';
import Activity from './activity';


const mSTP = (state, ownProps) => {
    return {
        friends: Object.values(state.entities.users)[0].friends,
        push: ownProps.history.push
    }
}

export default connect(mSTP, null)(Activity);