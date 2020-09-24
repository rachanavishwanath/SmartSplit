import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './footer';
import HomePage from './home_page';

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
                <div className="left-Nav">
                    <img src={window.logo} alt="Logo" />
                    <h1>SmartSplit!</h1>
                </div>
                <div className="right-nav">
                    <img src={window.user} alt="user"/>
                    <p>{this.props.currentUser.name}</p>
                    <div class="arrow-down"></div>
                    <div className="account-drop-down">
                        <a href="">Your account</a>
                        <a href="">Create a group</a>
                        <a href="">Fairness calculator</a>
                        <a onClick={this.handleLogout}>Log out</a>
                    </div>
                </div>
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
                <HomePage />
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