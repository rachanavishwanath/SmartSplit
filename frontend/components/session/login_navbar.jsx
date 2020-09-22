import React from 'react';
import { Link } from 'react-router-dom';

const LoginNavBar = () => {
    return (
        <div className="login-navbar">
            <div className="nav-left">
                <Link to="/">SmartSplit</Link>
            </div>
            <div className="nav-right">
                <Link to="/login">Log in</Link>
                <Link to="/signup">Sign up</Link>
            </div>
        </div>
    )
}
export default LoginNavBar;
