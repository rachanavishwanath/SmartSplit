import React from 'react';
import { dateFormat } from '../../../reducers/format_date/for_expense';

export default class ExpenseItems extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const { expense, deleteExpense, expenseDetails, currentUser, friends } = this.props;
        let d = dateFormat(expense.date).split(' ');
        let you_paid = 0;
        let you_borrowed = 0;
        let friend_name;
        if (expenseDetails && expenseDetails.length > 0) {
            expenseDetails.forEach(ed => {
                if (ed.paid_by === currentUser.id) {
                    you_paid = ed.amount_paid
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
            <li className="expense-list-items">
                <div className="summary">
                    <div className="expense-date">
                        <div>{d[0]}</div>
                        <div>{d[1]}</div>
                    </div>
                    <img src={window.expense} alt="expense-logo"/>
                    <div className="expense-desc">{expense.desc}</div>
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
                            <p className="you-lent">you lent</p>
                            <p className="lent-amount">$5</p>
                        </div>
                    )}
                    <button className="delete-expense" onClick={() => deleteExpense(expense.id)}>x</button>
                </div>
            </li>
        )
    }
}

// make this classical and active flags to show details of expense details