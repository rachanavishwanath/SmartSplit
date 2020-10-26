import React from 'react';

export default class AddFriend extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.addFriend = this.addFriend.bind(this);
    }

    addFriend(e){
        e.preventDefault();
        this.props.addFriend(this.state)
            .then(() => {
                this.props.closeModal;
                }, error => {
                    this.props.closeModal();
                    alert(error.errors);
                })
    }

    handleClick(e){
        e.preventDefault();
        this.props.closeModal();
    }

    update(e, field){
        e.preventDefault();
        this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        return (
            <div>
                <div className="addFriend-form">
                    <div className="expense-form-header">
                        <h2>Add a friend</h2>
                        <button onClick={e => this.handleClick(e)}>x</button>
                    </div>
                    <form className="add-friend-form">
                        <div className="pfields">
                            <label>Email:
                                <input type="text" 
                                    value={this.state.email} 
                                    placeholder="Enter email address"
                                    onChange={e => this.update(e, 'email')}
                                />
                            </label>
                        </div>
                        <div className="footer-buttons">
                            <button onClick={this.addFriend}>Add Friend</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}