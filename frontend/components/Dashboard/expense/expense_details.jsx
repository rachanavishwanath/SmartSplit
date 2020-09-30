import React from 'react';

export default class ExpenseDetails extends React.Component {
    constructor(props){
        super(props);
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
            return <li key={payer[0]} 
                    onClick={() => (this.props.setPayerId(payer[0]))}
                    className="ed-li"
                    >{payer[1]}</li>
        })
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