import React from 'react';
import Welcome from '../../greeting/welcome';
import ExpenseListItems from './expense_items';
import Dashboard from '../dashboard';
import LeftDashboard from '../LeftDashboard/left_dashboard';
import CenterDashboard from '../center_dashboard';
import RightDashboard from '../RightDashboard/right_dashboard';


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
            debugger
            return <ExpenseListItems 
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
                <div id="main-section">
                    <LeftDashboard />
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