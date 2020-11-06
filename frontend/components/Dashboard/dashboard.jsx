import React from 'react';
// import LeftDashboard from './LeftDashboard/left_dashboard';
import LeftDashboardContainer from './LeftDashboard/leftdashboard_container';
import RightDashboard from './RightDashboard/right_dashboard';
import GreetingComponent from '../greeting/greeting_container';
import DashboardCenterCol from './dashboard_centerCol';

export default class Dashboard extends React.Component {
    
    render(){
        return(
            <nav>
                <GreetingComponent />
                <div className="dashboard">
                    <LeftDashboardContainer push={this.props.push}/>
                    {/* <LeftDashboard friends={this.props.friends} openModal={this.props.openModal} /> */}
                    <DashboardCenterCol openModal={this.props.openModal} currentUser={this.props.user} fetchAllExpenseDetails={this.props.fetchAllExpenseDetails}/>
                    <RightDashboard/>
                </div>
            </nav>
        )
    }
}