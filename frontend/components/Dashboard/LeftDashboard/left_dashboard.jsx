import React from 'react';
import { Link } from 'react-router-dom';

export default class LeftDashboard extends React.Component {
    render() {
        return (
            <div className="left-dashboard">
                <Link id="dashboard-link" to="/dashboard">Dashboard</Link>
                <Link id="recent-activity" to="/activity"><i className="fas fa-flag" ></i>Recent activity</Link>
                <Link id="all-expenses" to="/all">All expenses</Link>
            </div>
        )
    }
}