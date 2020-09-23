import React from 'react';

export default class Footer extends React.Component {
    render(){
        return (
            <div className="footer">
                <div className="left-footer">
                    <p>Made with ☻ in Dublin, CA, USA</p>
                    <p>Copyright © 2020 SmartSplit, Inc. All rights reserved.</p>
                </div>
                <div className="right-footer">
                    <a href="#">About</a>
                    <a href="#">Jobs</a>
                    <a href="#">Calculators</a>
                    <a href="#">Blog</a>
                    <a href="#">Terms</a>
                    <a href="#">Press</a>
                    <a href="#">API</a>
                    <a href="#">Contact us</a>
                </div>
            </div>
        )
    }
}