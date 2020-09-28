import React from 'react';
import CenterDashboard from './centerDashboard/center_dashboard';


export default class DashboardCenterCol extends React.Component {

    render() {
        return (
            <div className="dashboard-center-col">
                <CenterDashboard openModal={this.props.openModal} header={'Dashboard'} />
            </div>
        )
    }
}