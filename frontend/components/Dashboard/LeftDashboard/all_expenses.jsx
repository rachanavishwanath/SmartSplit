import React from 'react';
import Welcome from '../../greeting/welcome';
import ExpenseItems from './expense_items';
import Dashboard from '../dashboard';
import LeftDashboard from '../LeftDashboard/left_dashboard';
import CenterDashboard from '../centerDashboard/center_dashboard';
import RightDashboard from '../RightDashboard/right_dashboard';
import GreetingComponent from '../../greeting/greeting_container';
import LeftDashboardContainer from './leftdashboard_container';

export default class AllExpenses extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllExpenses();
    }

    render(){
        if (!this.props.expenses) { return null;}
        const allExpenses = this.props.expenses.map(expense => {
            // debugger
            return <ExpenseItems 
                key={expense.id}
                expense={expense}
                deleteExpense={this.props.deleteExpense}
            />
        })
        console.log(this.props);
        return (
            <div className="all-expenses">
                <Welcome currentUser={this.props.currentUser} logout={this.props.logout}/>
                {/* <Dashboard /> */}
                {/* refactor code to use below component */}
                {/* <GreetingComponent /> */}
                <div id="main-section">
                    <LeftDashboardContainer/>
                    <div className="center-column">
                        <CenterDashboard openModal={this.props.openModal} header={'All expenses'} />
                        <div id="all-expenses">
                            <div className="month-filter">Month</div>
                            <ul className="expense-list">{allExpenses}</ul>
                        </div>
                    </div>
                    <RightDashboard />
                </div>
            </div>
        )
    }
}