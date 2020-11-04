import React from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {
    render(){
        return (
            <div className="footer">
                <div className="footer-nav">
                    <div className="right-footer">
                        <div className="div-1">
                            <h2 className="smartsplit">Smartsplit</h2>
                            <a target="_blank" href="https://github.com/rachanavishwanath/SmartSplit">Github</a>
                        </div>
                        <div className="div-2">
                            <h2 className="account">Account</h2>
                                <Link to="/login">Log in</Link>
                                <Link to="/signup">Sign up</Link>
                        </div>
                        <div className="div-1">
                            <h2 className="more">more</h2>
                            <a target="_blank" href="https://www.linkedin.com/in/rachana-vishwanath-450ba159">LinkedIn</a>
                            <a target="_blank" href="https://rachanavishwanath.github.io/">Portfolio</a>
                        </div>
                    </div>
                    <div className="left-footer">
                        <h2>Made with :) in Dublin, CA, USA</h2>
                        {/* <p>Copyright © 2020 SmartSplit, Inc. All rights reserved.</p> */}
                    </div>
                </div>
                <div className="footer-img">
                    <img src={window.footer} alt=""/>
                </div>
            </div>
        )
    }
}