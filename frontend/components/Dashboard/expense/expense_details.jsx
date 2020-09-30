import React from 'react';

export default class ExpenseDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.expenseDetails;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        debugger
        this.setState({ paid_by: e.currentTarget})
        this.props.openEDModal = false;
    }

    render() {
        const { friendships, payable_id, users } = this.props;
        let allPayers = [];
        allPayers.push([Object.values(users)[0].id, Object.values(users)[0].name])
        Object.values(users)[0].friends.forEach(friend => {
            if (friend.friend_id === payable_id) {
                allPayers.push([friend.profile_id, friend.name])
            }
        });
        const allPayersli = allPayers.map(payer => {
            debugger
            return <li key={payer[0]} 
                    onClick={this.handleClick}
                    className="ed-li"
                    >{payer[1]}</li>
        })
        console.log(this.props);
        return (
            <div className="child-modal expense-details">
                <div className="expense-form-header">
                    <h2>Choose Payer</h2>
                    <button onClick={this.props.handleClick}>x</button>
                </div>
                <ul className="ed-ul">{allPayersli}</ul>
            </div>
        )
    }
}