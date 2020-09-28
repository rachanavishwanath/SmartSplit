import React from 'react';
import AutoSearch from './autoSearch';

export default class ExpenseForm extends React.Component {

    constructor(props){
        super(props);
        this.state = this.props.expense;
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    select(e) {
        e.preventDefault();
        this.setState({
            inputVal: this.props.friends[e.currentTarget.value]
        })
    }
    
    handleClick(e){
        e.preventDefault();
        this.props.closeModal();
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.state.name === '' && this.state.email === '') {
            alert ('There is only one person involved in this expense. Do you still want to save it?')
        } else {
            this.props.processForm(this.state).then(() => {
                this.props.closeModal();
                this.state = this.props.expense;
            })
        }
    }

    updateField(field){
        return e => {
            switch (field) {
                case 'friend_id':
                    this.setState({
                        active: true
                    })
                    break;
                case 'amount':
                    this.setState({
                        [field]: parseInt(e.currentTarget.value)
                    })
                    break;
                default:
                    this.setState({
                        [field]: e.currentTarget.value
                    })
            };
        }
    }

    render() {
        return (
            <div className="expense-form">
                <div className="expense-form-header">
                    <h2>Add an expense</h2>
                    <button onClick={this.handleClick}>x</button>
                </div>
                <form className="expense-form-eles"onSubmit={this.handleSubmit}>
                    <div className="pfields">
                        <label>With <strong>you</strong> and:
                            <input 
                                type="text"
                                placeholder="Enter name or email addresses"
                                onChange={this.updateField('friend_id')}/>
                        </label>
                    </div>
                    <div className={this.state.active ? "expense-secondary-fields" : "hidden"}>
                        <div className="main-fields">
                            <img src={window.expense} alt="expense-logo"/>
                            <div className="main-fields-right">
                                <input 
                                    type="text"
                                    onChange={this.updateField('desc')}
                                    placeholder="Enter a description"
                                    value={this.state.desc}
                                />
                                <input 
                                    type="text"
                                    onChange={this.updateField('amount')}
                                    placeholder="0.00"
                                    value={this.state.amount}/>
                            </div>
                        </div>
                        <div className="human-summary">
                            Paid by  <a className="payer">you</a>
                              and split  <a className="split">equally</a>.
                            <div className="details">($0.00/person)</div>
                        </div>
                        <div className="footer-bottoms">
                            <a className="date slim-buttom">September 25, 2020</a>
                            <a className="notes slim-buttom">Add images/notes</a>
                            <a className="group slim-buttom">No group</a>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="footer-buttons">
                        <button onClick={this.handleClick}>Cancel</button>
                        <button>save</button>
                    </div>
                </form>
            </div>
        )
    }
}