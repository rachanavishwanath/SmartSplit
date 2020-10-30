import React from 'react';

export default class InviteFriend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            email: '',
            live_user: false,
            password: '123456789'
        }
        this.update = this.update.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    signUp(e){
        e.preventDefault();
        let that = this;
        this.props.signUpInvitedUser(this.state, this.props.currentUser).then((action) => {
            this.props.addFriend(action.user).then(() => {
                const {friends} = that.props;
                const friendId = friends[friends.length -1].friend_id
                const friendName = friends[friends.length -1].name
                this.props.setPayableId(friendId, friendName)
            })
        })
    }


    update(e){
        this.setState({ email: e.currentTarget.value })
    }


    render() {
        return (
            <div className="child-modal invite-friend">
                <h2 className="enter-email">{`Enter an email address for ${this.props.name}`}</h2>
                <form className="form2">
                    <label htmlFor="email" className="lemail">
                        <input type="text"
                            className="input-email"
                            onChange={e => this.update(e)}
                            value={this.state.email}
                    />
                </label>
                </form>
                <div className="footer-buttons">
                    <button onClick={this.props.handleClick}>Cancel</button>
                    <button onClick={e => this.signUp(e)}>OK</button>
                </div>
            </div>
        )
    }
}