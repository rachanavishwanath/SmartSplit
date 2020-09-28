import React from 'react';
import GreetingComponent from '../../greeting/greeting_container';
import RightDashboard from '../RightDashboard/right_dashboard';
import LeftDashboard from '../LeftDashboard/left_dashboard';
import ExpenseListItems from '../LeftDashboard/expense_items';
import CenterDashboard from '../centerDashboard/center_dashboard';

export default class FriendExpense extends React.Component {
    constructor(props) {
        super(props);
        this.findName = this.findName.bind(this);
    }
    componentDidMount(){
        this.props.fetchAllExpenses(this.props.friendId)
    }

    componentDidUpdate(prevProps){
        if (this.props.friendId !== prevProps.match.params.friendId) {
            this.props.fetchAllExpenses(this.props.friendId)
        }
    }

    findName (arr, payable_id) {
        let name;
        arr.forEach(val => {
            if (val["friend_id"] === parseInt(payable_id)) {
                console.log(val)
                name = val["name"]
            }
        })
        return name
    }

    render() {
        let name = this.findName(this.props.friends, this.props.friendId);
        if (!this.props.expenses) { return null; }
        const allExpenses = this.props.expenses.map(expense => {
            return <ExpenseListItems
                key={expense.id}
                expense={expense}
                deleteExpense={this.props.deleteExpense}
            />
        })
        return(
            <div >
                <GreetingComponent />
                <div className="friend-expense">
                    <LeftDashboard friends={this.props.friends}/>
                    <div className="center-column">
                        <CenterDashboard openModal={this.props.openModal} header={`${name}`} />
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