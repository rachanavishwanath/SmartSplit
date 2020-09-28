import React from 'react';
import AllExpensesContainer from '../expense/create_expense_container';

export default class CenterDashboard extends React.Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(modal){
        // debugger
        return e => {
            e.preventDefault();
            this.props.openModal(modal)
        }
    }
    render() {
        // debugger
        console.log(this.props)
        return (
            <div className="center-dashboard">
                <header>{this.props.header}</header>
                <div>
                    <button className="add-expense" 
                            onClick={this.handleClick('expense')}
                    >Add an Expense</button>
                    <button className="settle"
                        onClick={this.handleClick('settle')}
                    >Settle</button>
                </div>
                {/* <AllExpensesContainer/> */}
            </div>
        )
    }

}