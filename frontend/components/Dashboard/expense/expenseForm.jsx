import React from 'react';
import AutoSearch from './autoSearch';
import Categories from './categories';
import ExpenseDetails from './expense_details';
import AdditionalDetails from './additional_details';
import Calendar from 'react-calendar';

export default class ExpenseForm extends React.Component {

    constructor(props){
        super(props);
        this.state = this.props.expense;
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setCategory = this.setCategory.bind(this);
        this.setPayableId = this.setPayableId.bind(this);
        this.updateField = this.updateField.bind(this);
        this.onChange = this.onChange.bind(this);
        this.setPayerId = this.setPayerId.bind(this);
        this.updatedNotes = this.updatedNotes.bind(this);
        this.closeNotesModal = this.closeNotesModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllCategories();
        this.props.fetchAllFriends();
    }

    onChange(date) {
        this.setState({ date: date })
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
        if (this.state.name === '' && this.state.email === '') {
            alert('There is only one person involved in this expense. Do you still want to save it?')
        } 
        let that = this;
        e.preventDefault();
        this.props.processForm(this.state).then((action) => {
            action;
            this.setState({ expense_id: action.expense.id })
            this.props.createExpenseDetail(this.state);
            if (this.state.notes !== '' || this.state.asset_url !== '') {
                this.props.createAD(this.state);
            }
            this.props.closeModal();
            this.state = this.props.expense;
        }, response => {
                if (that.state.name === '') {
                    alert('There is only one person involved in this expense. Do you still want to save it?')
                } else if (that.state.desc === '') {
                    alert('You must enter a description')
                } else if (that.state.amount === '')  {
                    alert('You must enter some amount')
                } else if (that.state.category_id === undefined) {
                    alert('You must select a category')
                }        
        })
    }

    setPayableId(friend_id, friend_name){
        this.setState({
            payable_id: friend_id,
            show: false,
            name: friend_name
        })
    }

    setPayerId(payer_id){
        this.setState({
            paid_by: payer_id,
            openEDModal: false,
        })
    }

    updatedNotes(text){
        this.setState({
            notes: text,
        })
    }

    closeNotesModal() {
        this.setState({
            openNotes: false
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
                        [field]: parseInt(e.currentTarget.value),
                        amount_paid: parseInt(e.currentTarget.value)
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
        <div>
            <div className="expense-form">
                <div className="expense-form-header">
                    <h2>Add an expense</h2>
                    <button onClick={this.handleClick}>x</button>
                </div>
                <form className="expense-form-eles"onSubmit={e => this.handleSubmit(e)}>
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
                                <a className="date slim-buttom" onClick={() => this.setState({ openCal: true})}>September 25, 2020</a>
                                <a className="notes slim-buttom" onClick={() => this.setState({ openNotes: true })}>Add images/notes</a>
                            <a className="group slim-buttom">No group</a>
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
                    setPayerId={this.setPayerId}
                    friendships={this.props.friendsships}
                    payable_id={this.state.payable_id}
                    users={this.props.users}
                /> : null}
                {this.state.openCal ? 
                <div>
                    <div className="expense-form-header">
                        <h2>Choose date</h2>
                        <button onClick={this.handleClick}>x</button>
                    </div>
                    <Calendar
                        onChange={this.onChange}
                        handleClick={this.handleClick}
                        value={this.state.date}
                    /> 
                </div>: null}
                {this.state.openNotes ? 
                <AdditionalDetails
                    updatedNotes={this.updatedNotes}
                    handleClick={this.handleClick}
                    value={this.state.notes}
                    closeNotesModal={this.closeNotesModal}
                />
                : null}
        </div>
        )
    }
}