import React from 'react';
import Welcome from '../../greeting/welcome';
import ExpenseListItems from './expense_items';
import Dashboard from '../dashboard';

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
        return (
            <div className="all-expenses">
                <Welcome currentUser={this.props.currentUser} logout={this.props.logout}/>
                <Dashboard />
                <ul className="expense-list">{allExpenses}</ul>
            </div>
        )
    }
}