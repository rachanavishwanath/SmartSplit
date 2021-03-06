import React from 'react';
import { formatDate } from '../../../reducers/format_date/for_expense';
import AdditionalDetailsContainer from './additional_details_container';

export default class ExpendeItemDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openEditExpense: false
        }
        this.openEditExpense = this.openEditExpense.bind(this);
    }

    openEditExpense(e, modal){
        e.preventDefault();
        e.stopPropagation();
        this.props.openModal({modal: modal, expense: this.props.expense})
    }

    render() {
        const formattedDate = formatDate(this.props.expense.created_at);
        return(
            <div className="show-expense-details">
                <div className="edit-and-other">
                    <img src={window.expense} alt="category-image"/>
                    <section>
                        <p id="expense-desc">{this.props.expense.desc}</p>
                        <p id="expense-amount">{`$${this.props.expense.amount}`}</p>
                        <p id="expense-addedon">{`Added by ${this.props.added_by} on ${formattedDate}`}</p>
                        <button onClick={e => this.openEditExpense(e, 'edit-expense')} className="edit-expense">Edit expense</button>
                    </section>
                </div>
                <div className="show-other-details">
                    <div className="show-from-EDT">
                        <p><strong>{this.props.who_paid}</strong> paid <strong>${this.props.amount}</strong> and owes <strong>${this.props.you_lent}</strong></p>
                        <p><strong>{this.props.lent_to}</strong> owes $<strong>{this.props.you_lent}</strong></p>
                    </div>
                    <div className="show-from-ADT">
                        <AdditionalDetailsContainer 
                            expense={this.props.expense}
                        />
                    </div>
                </div>
            </div>
        )
    }
}