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
        // you borrowed is for groups
        const { expense, deleteExpense, expenseDetails, currentUser, friends } = this.props;
        
        let d = dateFormat(expense.date).split(' ');
        let who_paid = '';
        let you_paid = 0;
        let friend_name;
        let you_lent;

        if (friends) {
            friends.forEach(friend => {
                if (friend.friend_id === expense.payable_id) {
                    friend_name = friend.name
                }
            });
        }
        if (expenseDetails[0] === undefined) { return null; }
        if (expenseDetails && expenseDetails.length > 0) {
            expenseDetails.forEach(ed => {
                if (ed.paid_by === currentUser.id) {
                    who_paid = 'you';
                    you_paid = ed.amount_paid;
                    you_lent = you_paid / 2;
                } else {
                    who_paid = friend_name;
                    you_paid = ed.amount_paid;
                    you_lent = you_paid / 2;
                }
            })
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
                        <div className="expense-desc" onClick={this.toggleShow}>{expense.desc}
                        {expense.additional_detail_ids.length > 0 ? <i className="fas fa-comment"></i> : null}
                        </div>
                </div>
                <div className="expense-summary">
                    <div className="you-paid">
                        <p className="you-paid">{`${who_paid} paid`}</p>
                        <p className="paid-amount">{`$${you_paid}`}</p>
                    </div>
                    {who_paid === 'you' ? (
                        <div className="you-lent">
                            <p className="you-lent">{`you lent ${friend_name}`}</p>
                            <p className="lent-amount">{`$${you_lent}`}</p>
                        </div>
                    ) : ( 
                        <div className="you-lent">
                            <p className="you-lent">{`${friend_name} lent you`}</p>
                            <p className="you-borrowed">{`$${you_lent}`}</p>
                        </div>
                    )}
                    <button className="delete-expense" onClick={() => deleteExpense(expense.id)}>x</button>
                </div>
            </li>
            {this.state.show ? <ExpendeItemDetails
                    show={this.state.show}
                    openModal={this.props.openModal}
                    expense={this.props.expense}
                    who_paid={who_paid === 'you' ? currentUser.name : who_paid}
                    lent_to={who_paid === 'you' ? friend_name : currentUser.name}
                    amount={expense.amount}
                    you_paid={you_paid}
                    you_lent={you_lent}
                    added_by={expense.profile_id === currentUser.id ? currentUser.name : friend_name}
            /> : null}
            </div>
        )
    }
}

// make this classical and active flags to show details of expense details

//  <div className="you-borrowed">
//     <p className="you-borrowed-from">{`${friend_name} lent you`}</p>
//     <p className="you-borrowed">{`$${you_borrowed}`}</p>
// </div >