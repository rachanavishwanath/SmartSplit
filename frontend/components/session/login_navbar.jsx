import React from 'react';
import { Link } from 'react-router-dom';

const LoginNavBar = () => {
    return (
        <div className="login-navbar">
            <div className="nav-left">
                <img src={window.logo} alt="logo"/>
                <Link to="/">SmartSplit</Link>
            </div>
            <div className="nav-right">
                <Link className="lbttn"to="/login">Log in</Link>
                or
                <Link className="sbttn"to="/signup">Sign up</Link>
            </div>
        </div>
    )
}
export default LoginNavBar;
