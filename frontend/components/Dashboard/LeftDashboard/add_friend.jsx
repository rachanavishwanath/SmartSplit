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

    addFriend(){
        debugger
        this.props.addFriend(this.state).then(() => {
            this.props.closeModal;
        });
    }

    handleClick(){
        debugger
        this.props.closeModal;
    }

    update(e, field){
        debugger
        e.preventDefault();
        this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        console.log(this.props);
        return (
            <div className="addFriend-form">
                <div className="expense-form-header">
                    <h2>Add a friend</h2>
                    <button onClick={this.handleClick}>x</button>
                </div>
                <form className="add-friend-form">
                    <label>Email:
                        <input type="text" 
                            value={this.state.email} 
                            onChange={e => this.update(e, 'email')}
                        />
                    </label>
                    <button onClick={this.addFriend}>Add Friend</button>
                </form>
            </div>
        )
    }
}