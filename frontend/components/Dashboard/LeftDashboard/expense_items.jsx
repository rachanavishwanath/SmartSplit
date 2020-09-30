import React from 'react';
import { dateFormat } from '../../../reducers/format_date/for_expense';
import ExpendeItemDetails from './expense_item_details';

export default class ExpenseItems extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            show: false
        }
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow(){
        if (this.state.show) {
            this.setState({ show: false })
        } else { this.setState({ show: true }) }
    }

    render() {
        const { expense, deleteExpense, expenseDetails, currentUser, friends } = this.props;
        let d = dateFormat(expense.date).split(' ');
        let you_paid = 0;
        let you_borrowed = 0;
        let friend_name;
        let you_lent;
        if (expenseDetails && expenseDetails.length > 0) {
            debugger
            expenseDetails.forEach(ed => {
                if (ed.paid_by === currentUser.id) {
                    you_paid = ed.amount_paid;
                    you_borrowed = 
                    you_lent = you_paid / 2;
                } else {
                    you_borrowed = ed.amount_paid / 2;
                }
                if (ed.amount_borrowed > 0) {
                    you_borrowed = ed.amount_borrowed
                }
            })
        }
        if (friends) {
            friends.forEach(friend => {
                if (friend.friend_id === expense.payable_id) {
                    friend_name = friend.name
                }
            });
        }
        return (
            <div>
            <li className="expense-list-items">
                <div className="summary">
                    <div className="expense-date">
                        <div>{d[0]}</div>
                        <div>{d[1]}</div>
                    </div>
                    <img src={window.expense} alt="expense-logo"/>
                        <div className="expense-desc" onClick={this.toggleShow}>{expense.desc}</div>
                </div>
                <div className="expense-summary">
                    <div className="you-paid">
                        <p className="you-paid">you paid</p>
                        <p className="paid-amount">{`$${you_paid}`}</p>
                    </div>
                    {you_borrowed > 0 ? (
                        <div className="you-borrowed">
                            <p className="you-borrowed-from">{`${friend_name} lent you`}</p>
                            <p className="you-borrowed">{`$${you_borrowed}`}</p>
                        </div>
                    ) : (
                        <div className="you-lent">
                                <p className="you-lent">{`you lent ${friend_name}`}</p>
                                <p className="lent-amount">{`$${you_lent}`}</p>
                        </div>
                    )}
                    <button className="delete-expense" onClick={() => deleteExpense(expense.id)}>x</button>
                </div>
            </li>
            {this.state.show ? <ExpendeItemDetails
                    expense={this.props.expense}
            /> : null}
            </div>
        )
    }
}

// make this classical and active flags to show details of expense details