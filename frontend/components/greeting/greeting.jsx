import React from 'react';
import {Link} from 'react-router-dom';
export default class Greeting extends React.Component{
    render(){
        const display = this.props.currentUser ? (
            <div className="welcome">
                <p>{this.props.currentUser.name}</p>
                <button onClick={this.props.logout}>Log out</button>
            </div>
        ) : (
            <div className="login-signup">
                <h1>SmartSplit!</h1>
                <div>
                    <Link className="login" to="/login">Log in</Link>
                    <Link className="signup" to="/signup">Sign up</Link>
                </div>
            </div>
        );
        return(
            <div className="greeting">{display}</div>
        )
    }
}