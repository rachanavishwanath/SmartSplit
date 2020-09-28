import React from 'react';
import GreetingComponent from '../../greeting/greeting_container';
import RightDashboard from '../RightDashboard/right_dashboard';
import RecentActicity from './recent_activity';
import LeftDashboard from '../LeftDashboard/left_dashboard';

export default class Activity extends React.Component {
    render() {
        // debugger
        // console.log(this.props);
        return(
            <div>
                <GreetingComponent />
                <div className="recent-activity">
                    <LeftDashboard friends={this.props.friends}/>
                    <RecentActicity />
                    <RightDashboard />
                </div>
            </div>
        )
    }
}