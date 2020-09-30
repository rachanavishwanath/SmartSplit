import React from 'react';
import AutoSearch from './autoSearch';
import Categories from './categories';
import ExpenseDetails from './expense_details';

export default class ExpenseForm extends React.Component {

    constructor(props){
        super(props);
        this.state = this.props.expense;
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setCategory = this.setCategory.bind(this);
        this.setPayableId = this.setPayableId.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllCategories();
        debugger
        this.props.fetchAllFriends();
    }

    select(field) {
        return e => {
            e.preventDefault();
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    setCategory(category_id) {
        this.setState({ 
            category_id: category_id,
            openCatModal: false 
        })
    }
    
    handleClick(e){
        e.preventDefault();
        this.props.closeModal();
        this.state = this.props.expense;
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

    setPayableId(friend_id, friend_name){
        this.setState({
            payable_id: friend_id,
            show: false,
            name: friend_name
        })
    }

    updateField(field){
        let that = this;
        return e => {
            e.preventDefault();
            switch (field) {
                case 'friend_id':
                    e.stopPropagation();
                    that.setState({
                        active: true,
                        show: true,
                        name: e.currentTarget.value, 
                    });
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
        console.log(this.props)
        return (
        <div>
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
                                value={this.state.name}
                                placeholder="Enter name or email addresses"
                                onChange={this.updateField('friend_id')}
                            />
                        </label>
                    </div>
                    <div className={this.state.active ? "expense-secondary-fields" : "hidden"}>
                        <div className="main-fields">
                            <img src={window.expense} onClick={() => this.setState({openCatModal: true}) } alt="expense-logo"/>
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
                                Paid by  <a className="payer" onClick={() => this.setState({ openEDModal: true}) }>you</a>
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
                {this.state.openCatModal ? <Categories categories={this.props.categories} handleClick={this.handleClick} setCategory={this.setCategory}/> : null }
                {this.state.show ? <AutoSearch friends={this.props.friends}
                    setPayableId={this.setPayableId}
                    state={this.state}
                    val={this.state.name}
                    />
                : null
                }
                {this.state.openEDModal ? <ExpenseDetails 
                    handleClick={this.handleClick}
                    friendships={this.props.friendsships}
                    payable_id={this.state.payable_id}
                    users={this.props.users}
                    expenseDetails={this.props.expense_detail}
                    openEDModal={this.state.openEDModal}
                />: null}
        </div>
        )
    }
}