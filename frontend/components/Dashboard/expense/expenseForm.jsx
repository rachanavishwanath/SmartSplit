import React from 'react';
import AutoSearch from './autoSearch';
import Categories from './categories';
import ExpenseDetails from './expense_details';
import AdditionalDetails from './additional_details';
import InviteFriendContainer from './invite_friend_container';
import InviteFriend from './invite_friend';
import SplitType from './split_type';

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
        this.OpenChildModal = this.OpenChildModal.bind(this);
        this.updateName = this.updateName.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllCategories();
        this.props.fetchAllFriends();
        this.setState({ onScreen: true})
    }

    componentWillUnmount() {
        this.setState({ onScreen: false})
    // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
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
    
    handleClick(e, modal){
        e.preventDefault();
        switch(modal){
            case 'Calender':
                this.setState({ openCal: false });
                break;
            case 'Category':
                this.setState({ openCatModal: false });
                break;
            case 'ED':
                this.setState({ openEDModal: false });
                break;
            case 'AD':
                this.setState({ openNotes: false });
                break;
            case 'IF':
                this.setState({ openInviteFriend: false });
                break;
            case 'ST':
                this.setState({ openSplitType: false });
                break;
            default:
                this.props.closeModal();
        }
        this.state = this.props.expense;
    }

    handleSubmit(e){
        let { id, desc, category_id, payable_type, payable_id, date, split_type, amount, 
            expense_id, paid_by, amount_paid, author_id, notes, asset_url, assetFile, edId } = this.state;
        if (this.state.name === '' && this.state.email === '') {
            alert('There is only one person involved in this expense. Do you still want to save it?')
        } 
        let that = this;
        e.preventDefault();
        that.props.processForm({id, desc, category_id, 
            payable_type, payable_id, amount, 
            date, split_type}
        ).then((action) => {
            that.setState({ expense_id: action.expense.id });
            expense_id = action.expense.id;
            if (that.props.paid_by != that.state.paid_by || that.props.amount_paid != that.state.amount_paid) {
                that.props.createExpenseDetail({ id: edId, expense_id, paid_by, amount_paid }).then(() =>{
                    that.props.friendId != '' ? that.props.fetchAllExpenses(that.props.friendId) : that.props.fetchAllExpenses();
                });
            }
            if (that.state.notes !== that.props.notes || that.state.asset_url !== that.props.asset_url) {
                const formData = new FormData();
                formData.append('additional_detail[notes]', notes);
                formData.append('additional_detail[author_id]', author_id);
                formData.append('additional_detail[expense_id]', expense_id);
                if (that.state.asset_url != null) {
                    formData.append('additional_detail[asset]', assetFile)
                }
                that.props.createAD(formData);
            }
            this.props.closeModal();
            this.setState(this.props.expense);
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
        }).then(() => {
            this.props.fetchCurrentUser();
        })
    }

    setPayableId(friend_id, friend_name){
        this.setState({
            payable_id: friend_id,
            show: false,
            name: friend_name,
            openInviteFriend: false
        })
    }

    setPayerId(payer_id){
        this.setState({
            paid_by: payer_id,
            openEDModal: false,
            openSplitType: false
        })
    }

    updatedNotes(text, asset_url, assetFile) {
        asset_url != '' ?
        this.setState({
            notes: text,
            asset_url: asset_url,
            assetFile: assetFile
        }) : 
        this.setState({
            notes: text
        })
    }

    updateName(name){
        this.setState({
            name: name
        })
    }

    closeNotesModal() {
        this.setState({
            openNotes: false
        })
    }

    OpenChildModal(e) {
        e.preventDefault();
        this.setState({ openInviteFriend: true })
        // this.props.openModal('invite-friend')
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
                        [field]: (e.currentTarget.value),
                        amount_paid: parseInt(e.currentTarget.value)
                    })
                    break;
                case 'date':
                    this.setState({
                        [field]: e.currentTarget.value
                    })
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
            <div className={`expense-form ${this.state.onScreen ? `onScreen` : `offScreen` }`}>
                <div className="expense-form-header">
                    <h2>{this.props.formType} expense</h2>
                    <button onClick={e => this.handleClick(e)}>x</button>
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
                            <figure>
                                <img src={window.expense} onClick={() => this.setState({ openCatModal: true, openNotes: false, openCal: false, openEDModal: false, openSplitType: false}) } alt="expense-logo"/>
                                <figcaption>Category</figcaption>
                            </figure>
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
                                Paid by  <a className="payer" onClick={() => this.setState({ openEDModal: true, openNotes: false, openCal: false, openCatModal: false, openSplitType: false}) }>you</a>
                              and split  <a className="split" onClick={() => this.setState({openSplitType: true, openEDModal: false, openNotes: false, openCal: false, openCatModal: false})}>equally</a>.
                            <div className="details">{`$${this.state.amount/2}/person`}</div>
                        </div>
                        <div className="footer-bottoms">
                               <label htmlFor="expense-date" className="date slim-buttom">
                                    <input type="date"
                                        onClick={() => this.setState({ openCal: true, openNotes: false, openEDModal: false, openCatModal: false, openSplitType: false }) }
                                        onChange={this.updateField('date')}
                                    />
                                </label>
                                <a className="notes slim-buttom" onClick={() => this.setState({ openNotes: true, openCal: false, openEDModal: false, openCatModal: false, openSplitType: false })}>Add images/notes</a>
                            <a className="group slim-buttom">No group</a>
                        </div>
                    </div>
                    <div className="footer-buttons">
                        <button onClick={e => this.handleClick(e)}>Cancel</button>
                        <button>save</button>
                    </div>
                </form>
            </div>
                {this.state.openCatModal ? <Categories 
                    categories={this.props.categories} 
                    handleClick={e => this.handleClick(e, 'Category')} 
                    setCategory={this.setCategory}
                /> : null }
                {this.state.show ? <AutoSearch friends={this.props.friends}
                    setPayableId={this.setPayableId}
                    openInviteFriend={this.OpenChildModal}
                    state={this.state}
                    val={this.state.name}
                    />
                : null
                }
                {this.state.openEDModal ? <ExpenseDetails 
                    handleClick={e => this.handleClick(e, 'ED')}
                    setPayerId={this.setPayerId}
                    friendships={this.props.friendsships}
                    payable_id={this.state.payable_id}
                    users={this.props.users}
                /> : null}
                {this.state.openNotes ? 
                <AdditionalDetails
                    updatedNotes={this.updatedNotes}
                    handleClick={e => this.handleClick(e, 'AD')}
                    value={this.state.notes}
                    closeNotesModal={this.closeNotesModal}
                />
                : null}
                {this.state.openInviteFriend ? 
                <InviteFriendContainer
                    updateName={this.updateName}
                    handleClick={e => this.handleClick(e, 'IF')}
                    name={this.state.name}
                    setPayableId={this.setPayableId}
                /> 
                : null}
                {this.state.openSplitType ? 
                    <SplitType
                        payable_id={this.state.payable_id}
                        users={this.props.users}
                        you={this.props.currentUser}
                        setPayerId={this.setPayerId}
                        handleClick={e => this.handleClick(e, 'ST')}
                    />
                    : null
                }
        </div>
        )
    }
}