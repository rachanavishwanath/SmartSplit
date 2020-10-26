import React from 'react';
import GreetingComponent from '../../greeting/greeting_container';
import RightDashboard from '../RightDashboard/right_dashboard';
import LeftDashboard from '../LeftDashboard/left_dashboard';
import LeftDashboardContainer from '../LeftDashboard/leftdashboard_container';
import ExpenseItems from '../LeftDashboard/expense_items';
import CenterDashboard from '../centerDashboard/center_dashboard';

export default class FriendExpense extends React.Component {
    constructor(props) {
        super(props);
        this.findName = this.findName.bind(this);
    }
    componentDidMount(){
        this.props.fetchAllExpenses(this.props.friendId);
        this.props.fetchAllExpenseDetails();
        this.props.fetchAllFriends();
    }

    componentDidUpdate(prevProps){
        if (this.props.friendId !== prevProps.match.params.friend_id) {
            this.props.fetchAllExpenses(this.props.friendId)
        } 
        if (this.props.expenses.length !== prevProps.expenses.length) {
            this.props.fetchAllExpenses(this.props.friendId)
        }
    }

    findName (arr, payable_id) {
        let name;
        arr.forEach(val => {
            if (val["friend_id"] === parseInt(payable_id)) {
                name = val["name"]
            }
        })
        return name
    }

    render() {
        let that = this;
        let name = this.findName(this.props.friends, this.props.friendId);
        if (!this.props.expenses) { return null; }
        const allExpenses = this.props.expenses.map(expense => {
            const expenseDetails = expense.expense_detail_ids.map(expenseDetailId => {
                return that.props.expenseDetails[expenseDetailId]
            })
            return <ExpenseItems
                key={expense.id}
                expense={expense}
                currentUser={this.props.currentUser}
                deleteExpense={this.props.deleteExpense}
                expenseDetails={expenseDetails}
                friends={this.props.friends}
            />
        })
        return(
            <div >
                <GreetingComponent />
                <div className="friend-expense">
                    {/* <LeftDashboard friends={this.props.friends}/> */}
                    <LeftDashboardContainer />
                    <div className="center-column">
                        <CenterDashboard openModal={this.props.openModal} header={`${name}`} friendId={this.props.friendId}/>
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
