import React from 'react';
import CenterDashboard from './centerDashboard/center_dashboard';

export default class DashboardCenterCol extends React.Component {

    render() {
        console.log(this.props);
        debugger
        const you_owe = this.props.currentUser[0].you_owe[0]
        const you_are_owed = this.props.currentUser[0].you_are_owed[0]
        const total_bal = you_are_owed - you_owe
        debugger
        return (
            <div className="dashboard-center-col">
                <CenterDashboard openModal={this.props.openModal} header={'Dashboard'} />
                <div className="overall-info">
                    <div className="total-balance">
                        <p>total balance</p>
                        <p className={total_bal > 0 ? "lent-amount" : "you-borrowed"}>${total_bal}</p>
                    </div>
                    <div className="you-owe">
                        <p>you owe</p>
                        <p className="you-borrowed">${you_owe}</p>
                    </div>
                    <div className="you-are-owed">
                        <p>you are owed</p>
                        <p className="lent-amount">${you_are_owed}</p>
                    </div>
                </div>
                <div className="transaction-summary">
                    <div className="you-owe-left">
                        <h1>YOU OWE</h1>
                    </div>
                    <div className="you-are-owe-right">
                        <h1>YOU ARE OWED</h1>
                    </div>
                </div>
            </div>
        )
    }
}