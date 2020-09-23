import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './footer';

export default class Greeting extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            logout: false
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.setState({ logout: true })
        this.props.logout();
    }

    render(){
        const display = this.props.currentUser ? (
            <div className="welcome">
                <p>{this.props.currentUser.name}</p>
                <button onClick={this.handleLogout}>Log out</button>
            </div>
        ) : (
            <div className="splash">
                <div className="login-signup">
                    <div>
                        <img src={window.logo} alt="Logo"/>
                        <h1>SmartSplit!</h1>
                    </div>
                    <div>
                        <Link className="login" to="/login">Log in</Link>
                        <Link className="signup" to="/signup">Sign up</Link>
                    </div>
                </div>
                {this.state.logout ? <div className="logout-notice">You are now logged out.</div> : null}
            </div>
        );
        return(
            <div className="greeting">
                {display}
                <Footer />
            </div>
        )
    }
}