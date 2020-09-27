import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './footer';
import HomePage from './home_page';
import Dashboard from '../Dashboard/dashboard';
import Welcome from './welcome';

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
            <div>
                <Welcome 
                    currentUser={this.props.currentUser} 
                    logoutFlag={this.state.logout}
                    logout={this.handleLogout}
                />
                <Dashboard openModal={this.props.openModal} closeModal={this.props.closeModal}/>
            </div>
        ) : (
            <div>
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
                <Footer />
            </div>
        );
        return (
            <div className="greeting">
                {display}
            </div>
        )
    }
}