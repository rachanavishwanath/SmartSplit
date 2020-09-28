import React from 'react';
import GreetingComponent from '../../greeting/greeting_container';
import RightDashboard from '../RightDashboard/right_dashboard';

export default class FriendExpense extends React.Component {
    render() {
        return(
            <div className="friend-expense">
                <GreetingComponent />
                <h2>Friend Container</h2>
                <RightDashboard />
            </div>
        )
    }
}