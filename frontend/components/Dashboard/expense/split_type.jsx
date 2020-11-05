import React from 'react';

export default class SplitType extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showEq: true,
            showEx: false,
            showPerc: false,
            title: 'Split equally between'
        }
        this.you_owe = this.you_owe.bind(this);
        this.they_owe = this.they_owe.bind(this);
        this.updateShow = this.updateShow.bind(this);
        // this.selectedTab = this.selectedTab.bind(this);
    }
    you_owe(e){
        e.preventDefault();
        this.props.setPayerId(this.props.you.id);
    }
    they_owe(e){
        e.preventDefault();
        const { payable_id, you } = this.props;
        for(let i = 0; i< you.friends.length; i++){
            const friend = you.friends[i];
            if (friend.friend_id === payable_id) {
                this.props.setPayerId(friend.profile_id)
                break;
            }
        }
        
    }

    updateShow(show) {
        switch(show){
             case 'showEq':
                this.setState({
                    showEq: true,
                    showEx: false,
                    showPerc: false,
                    title: 'Split equally between'
                })
                break;
            case 'showEx':
                this.setState({
                    showEq: false,
                    showEx: true,
                    showPerc: false,
                    title: 'Split by exact amount'
                })
                break;
            case 'showPerc':
                this.setState({
                    showEq: false,
                    showEx: false,
                    showPerc: true,
                    title: 'Split by percentage'
                })
                break;
        }
    }
    render() {
        const { payable_id, users } = this.props;
        let allPayers = [];
        allPayers.push([Object.values(users)[0].id, Object.values(users)[0].name])
        Object.values(users)[0].friends.forEach(friend => {
            if (friend.friend_id === payable_id) {
                allPayers.push([friend.profile_id, friend.name])
            }
        });
        const allPayersli = allPayers.map(payer => {
            return <li key={payer[0]}
                    className="split-between" 
                    >{payer[1]}</li>
        })
        return (
            <div className="child-modal split-options">
                    <div className="expense-form-header">
                        <h2>Choose split option</h2>
                        <button onClick={this.props.handleClick}>x</button>
                    </div>
                    <div className="split-option-slim-buttons">
                        {/* <button className="slim-buttom split-expense">Split the expense</button> */}
                        <button className="slim-buttom you-owe-full" onClick={e => this.you_owe(e)}>You owe the full amount</button>
                        <button className="slim-buttom they-owe-full" onClick={e => this.they_owe(e)}>They owe the full amount</button>
                    </div>
                    {/* <div className="split-options">
                        <ul className="split-options-ul">
                            <li className="split-options-li" onClick={e => this.updateShow('showEq')}>=
                                <div className="split-option-wrapper">
                                    <div className="on-hover-show">Split equally</div>
                                </div>      
                            </li>
                            <li className="split-options-li split-by-amount"onClick={e => this.updateShow('showEx')}>1.23
                                 <div className="on-hover-show">Split by exact amount</div>  
                            </li>
                            <li className="split-options-li split-by-percent" onClick={e => this.updateShow('showPerc')}>%
                                <div className="on-hover-show">Split by percentage</div>
                            </li>
                        </ul>
                        <h2 className="split-title">{this.state.title}</h2>
                        {this.state.showEq ? <ul className="ed-ul">{allPayersli}</ul>: null}
                        {this.state.showEx ? <ul className="ed-ul">{allPayersli}</ul>: null}
                        {this.state.showPerc ? <ul className="ed-ul">{allPayersli}</ul>: null}
                    </div> */}
            </div>
        )
    }
}