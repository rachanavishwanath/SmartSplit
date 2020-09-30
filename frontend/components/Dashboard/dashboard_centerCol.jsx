import React from 'react';
import CenterDashboard from './centerDashboard/center_dashboard';


export default class DashboardCenterCol extends React.Component {

    render() {
        return (
            <div className="dashboard-center-col">
                <CenterDashboard openModal={this.props.openModal} header={'Dashboard'} />
                <div className="overall-info">
                    <div className="total-balance">
                        <p>total balance</p>
                        <p>some amount</p>
                    </div>
                    <div className="you-owe">
                        <p>you owe</p>
                        <p>some amount</p>
                    </div>
                    <div className="you-are-owed">
                        <p>you are owed</p>
                        <p>some amount</p>
                    </div>
                </div>
                <div className="transaction-summary">
                    <p>transaction-summary</p>
                </div>
            </div>
        )
    }
}