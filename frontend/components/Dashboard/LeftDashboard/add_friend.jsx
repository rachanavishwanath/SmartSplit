// import React from 'react';

// export default class AddFriend extends React.Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             email: '',
//             name: '',
//             password: '123456789',
//             live_user: false
//         };
//         this.handleClick = this.handleClick.bind(this);
//         this.addFriend = this.addFriend.bind(this);
//     }

//     addFriend(e){
//         e.preventDefault();
//         this.props.addFriend(this.state)
//             .then(() => {
//                 this.props.closeModal;
//                 }, error => {
//                     this.props.closeModal();
//                     alert(error.errors);
//                 })
//     }

//     handleClick(e){
//         e.preventDefault();
//         this.props.closeModal();
//     }

//     update(e, field){
//         e.preventDefault();
//         this.setState({ [field]: e.currentTarget.value })
//     }

//     render() {
//         return (
//             <div>
//                 <div className="addFriend-form">
//                     <div className="expense-form-header">
//                         <h2>Add a friend</h2>
//                         <button onClick={e => this.handleClick(e)}>x</button>
//                     </div>
//                     <form className="add-friend-form">
//                         <div className="pfields">
//                             <label>Name:
//                                 <input type="text" 
//                                     value={this.state.name} 
//                                     placeholder="Enter name"
//                                     onChange={e => this.update(e, 'name')}
//                                 />
//                             </label>
//                             <label>Email:
//                                 <input type="text" 
//                                     value={this.state.email} 
//                                     placeholder="Enter email address"
//                                     onChange={e => this.update(e, 'email')}
//                                 />
//                             </label>
//                         </div>
//                         <div className="footer-buttons">
//                             <button onClick={this.addFriend}>Add Friend</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

import React from 'react';

export default class AddFriend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            live_user: false,
            password: '123456789'
        }
        this.update = this.update.bind(this);
        this.signUp = this.signUp.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    signUp(e){
        e.preventDefault();
        let that = this;
        this.props.signUpInvitedUser(this.state, this.props.currentUser).then((action) => {
            this.props.addFriend(action.user)
        })
    }


    update(e, field){
        this.setState({ [field]: e.currentTarget.value })
    }

    handleClick(e) {
        e.preventDefault();
        this.props.closeModal();
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
                            <label>Name:
                                <input type="text" 
                                    value={this.state.name} 
                                    placeholder="Enter name"
                                    onChange={e => this.update(e, 'name')}
                                />
                            </label>
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