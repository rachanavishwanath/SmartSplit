import React from 'react';
import { formatDate } from '../../../reducers/format_date/for_expense';

export default class ExpendeItemDetails extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        const formattedDate = formatDate(this.props.expense.created_at);
        console.log(this.props);
        return(
            <div className="show-expense-details">
                <div className="edit-and-other">
                    <img src={window.expense} alt="category-image"/>
                    <section>
                        <p id="expense-desc">{this.props.expense.desc}</p>
                        <p id="expense-amount">{`$${this.props.expense.amount}`}</p>
                        <p id="expense-addedon">{`Added by ${this.props.added_by} on ${formattedDate}`}</p>
                        <button>Edit expense</button>
                    </section>
                </div>
                <div className="show-other-details">
                    <div className="show-from-EDT">
                        <p>{`${this.props.who_paid} paid $${this.props.amount} and owes $${this.props.you_lent}`}</p>
                        <p>{`${this.props.lent_to} owes $${this.props.you_lent}`}</p>
                    </div>
                    <div className="show-from-ADT">
                        <p>details from additional details table</p>
                    </div>
                </div>
            </div>
        )
    }
}