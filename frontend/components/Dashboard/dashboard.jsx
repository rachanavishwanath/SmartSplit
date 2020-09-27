import React from 'react';
import DashboardNav from './dashboard_nav';
import LeftDashboard from './LeftDashboard/left_dashboard';
import RightDashboard from './RightDashboard/right_dashboard';

export default class Dashboard extends React.Component {
    
    render(){
        debugger
        return(
            <div className="dashboard">
                <LeftDashboard />
                <DashboardNav openModal={this.props.openModal} header={'Dashboard'}/>
                <RightDashboard />
            </div>
        )
    }
}