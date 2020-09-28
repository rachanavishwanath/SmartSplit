import React from 'react';
import LeftDashboard from './LeftDashboard/left_dashboard';
import RightDashboard from './RightDashboard/right_dashboard';
import GreetingComponent from '../greeting/greeting_container';
import DashboardCenterCol from './dashboard_centerCol';

export default class Dashboard extends React.Component {
    
    render(){
        console.log(this.props);
        debugger
        return(
            <nav>
                <GreetingComponent />
                <div className="dashboard">
                    <LeftDashboard friends={this.props.friends} />
                    <DashboardCenterCol openModal={this.props.openModal}/>
                    <RightDashboard/>
                </div>
            </nav>
        )
    }
}