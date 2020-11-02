import React from 'react';

export default class SplitType extends React.Component {
    constructor(props){
        super(props);
        this.you_owe = this.you_owe.bind(this);
        this.they_owe = this.they_owe.bind(this);
    }
    you_owe(e){
        e.preventDefault();
        this.props.setPayerId(this.props.you.id)
    }
    they_owe(e){
        e.preventDefault();
        const { payable_id, you } = this.props;
        for(let i = 0; i< you.friends.length; i++){
            const friend = you.friends[i];
            if (friend.friend_id === payable_id) {
                this.props.setPayerId(friend.profile_id);
                break;
            }
        }
    }
    render() {
        return (
            <div className="child-modal expense-details">
                    <div className="expense-form-header">
                        <h2>Choose split option</h2>
                        <button onClick={this.props.handleClick}>x</button>
                    </div>
                    <div className="split-option-slim-buttons">
                        <button className="slim-buttom split-expense">Split the expense</button>
                        <button className="slim-buttom you-owe-full" onClick={e => this.you_owe(e)}>You owe the full amount</button>
                        <button className="slim-buttom they-owe-full" onClick={e => this.they_owe(e)}>They owe the full amount</button>
                    </div>
                    <div className="split-options">
                        <ul className="split-options-ul">
                            <li className="split-options-li">=
                                <div className="split-option-wrapper">
                                    <div className="on-hover-show">Split equally</div>
                                </div>      
                            </li>
                            <li className="split-options-li split-by-amount">1.23
                                 <div className="on-hover-show">Split by exact amount</div>
                            </li>
                            <li className="split-options-li split-by-percent">%
                                <div className="on-hover-show">Split by percentage</div>
                            </li>
                        </ul>
                    </div>
            </div>
        )
    }
}