import React from 'react';

export default class ExpendeItemDetails extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return(
            <div className="show-expense-details">
                <div className="edit-and-other">
                    <img src={window.expense} alt="category-image"/>
                    <section>
                        <p id="expense-desc">{this.props.expense.desc}</p>
                        <p id="expense-amount">{`$${this.props.expense.amount}`}</p>
                        <p id="expense-addedon">{`Added by ${this.props.expense.createdAt}`}</p>
                        <button>Edit expense</button>
                    </section>
                </div>
                <div className="show-other-details">
                    <div className="show-from-EDT">
                        <p>details from expense details table</p>
                    </div>
                    <div className="show-from-ADT">
                        <p>details from additional details table</p>
                    </div>
                </div>
            </div>
        )
    }
}