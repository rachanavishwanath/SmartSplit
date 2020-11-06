import React from 'react';
import GreetingComponent from '../../greeting/greeting_container';
import RightDashboard from '../RightDashboard/right_dashboard';
import RecentActicity from './recent_activity';
import LeftDashboard from '../LeftDashboard/left_dashboard';
import LeftDashboardContainer from '../LeftDashboard/leftdashboard_container';

export default class Activity extends React.Component {
    render() {
        return(
            <div>
                <GreetingComponent />
                <div className="recent-activity">
                    {/* <LeftDashboard friends={this.props.friends}/> */}
                    <LeftDashboardContainer push={this.props.push}/>
                    <RecentActicity />
                    <RightDashboard />
                </div>
            </div>
        )
    }
}