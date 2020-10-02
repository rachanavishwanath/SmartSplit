import React from 'react';

export default class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.logout;
    }

    render() {
        debugger
        return (
            <div className="welcome">
                <div className="left-Nav">
                    <img src={window.logo} alt="Logo" />
                    <h1>SmartSplit!</h1>
                </div>
                <div className="right-nav">
                    <img src={window.user} alt="user" />
                    <p>{this.props.currentUser.name}</p>
                    <div className="arrow-down"></div>
                    <div className="account-drop-down">
                        <a href="">Your account</a>
                        <a href="">Create a group</a>
                        <a href="">Fairness calculator</a>
                        <a onClick={this.props.logout}>Log out</a>
                    </div>
                </div>
            </div>
        )
    }
}
