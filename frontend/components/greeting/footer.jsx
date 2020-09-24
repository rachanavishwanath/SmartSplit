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
                    <a href="https://www.linkedin.com/in/rachana-vishwanath-450ba159">LinkedIn</a>
                    <a href="https://github.com/rachanavishwanath/SmartSplit">Github</a>
                </div>
            </div>
        )
    }
}