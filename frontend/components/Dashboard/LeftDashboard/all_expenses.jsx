import React from 'react';
import Welcome from '../../greeting/welcome';
import ExpenseItems from './expense_items';
import CenterDashboard from '../centerDashboard/center_dashboard';
import RightDashboard from '../RightDashboard/right_dashboard';
import LeftDashboardContainer from './leftdashboard_container';

export default class AllExpenses extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllExpenses();
        this.props.fetchAllExpenseDetails();
    }

    render(){
        if (!this.props.expenses) { return null;}
        let that = this;
        const allExpenses = this.props.expenses.map(expense => {
            const expenseDetails = expense.expense_detail_ids.map(expenseDetailId => {
                return that.props.expenseDetails[expenseDetailId]
            })
            return <ExpenseItems 
                key={expense.id}
                expense={expense}
                deleteExpense={this.props.deleteExpense}
                expenseDetails={expenseDetails}
                currentUser={this.props.currentUser}
                friends={this.props.currentUser.friends}
            />
        })
        return (
            <div className="all-expenses">
                <Welcome currentUser={this.props.currentUser} logout={this.props.logout}/>
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