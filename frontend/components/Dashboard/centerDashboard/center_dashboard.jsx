import React from 'react';

export default class CenterDashboard extends React.Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(modal){
        return e => {
            e.preventDefault();
            this.props.openModal(modal)
        }
    }
    
    render() {
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
            </div>
        )
    }

}