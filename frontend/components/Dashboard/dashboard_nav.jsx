import React from 'react';

export default class DashboardNav extends React.Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(modal){
        debugger
        return e => {
            e.preventDefault();
            this.props.openModal(modal)
        }
    }
    render() {
        debugger
        return (
            <div className="dashboard-nav">
                <header>{this.props.header}</header>
                <div>
                    <button className="add-expense" 
                            onClick={this.handleClick('expense')}
                    >Add an Expense</button>
                    <button className="settle"
                        onClick={this.handleClick('settle')}
                    >Settle</button>
                </div>
            </div>
        )
    }

}