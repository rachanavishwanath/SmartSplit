import React from 'react';
import CenterDashboard from './center_dashboard';
import LeftDashboard from './LeftDashboard/left_dashboard';
import RightDashboard from './RightDashboard/right_dashboard';
import Welcome from '../greeting/welcome';
export default class Dashboard extends React.Component {
    
    render(){
        console.log(this.props);
        debugger
        return(
            <div className="dashboard">
                <LeftDashboard />
                <div>
                    <CenterDashboard openModal={this.props.openModal} header={'Dashboard'}/>
                </div>
                <RightDashboard />
            </div>
        )
    }
}