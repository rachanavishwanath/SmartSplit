import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './footer';
import HomePage from './home_page';
import Welcome from './welcome';
import Features from './features';

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
        this.setState({ logout: true });
        this.props.logout()
    }

    componentDidMount(){
        this.setState({ logout: false });
    }

    componentWillUnmount(){
        this.setState({ logout: true });
    }

    render(){
        const display = this.props.currentUser ? (
            <div>
                <Welcome 
                    currentUser={this.props.currentUser} 
                    logout={this.handleLogout}
                />
            </div>
        ) : (
            <div className="bkg">
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
                <Features />
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