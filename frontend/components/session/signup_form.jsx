import React from 'react';
import ErrorList from './error_list';

export default class SignUpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state).then(() => {
            return this.props.history.push('/')
        });
        this.setState({
            name: '',
            email: '',
            password: ''
        })
    }

    render(){
        return(
            <div className="signup-form"> 
                <img src={window.logo} alt="logo" />
                <form className="form" onSubmit={this.handleSubmit}>
                    <h3>INTRODUCE YOURSELF</h3>
                    <ErrorList errors={this.props.errors} />
                    <label>Hi there! My name is <br/>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.update('name')} />
                    </label>
                    <br /><br />
                    <label>Here’s my email address: <br />
                        <input 
                            type="text" 
                            value={this.state.email} 
                            onChange={this.update('email')}/>
                    </label>
                    <br /><br />
                    <label>And here’s my password: <br />
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    <br /><br />
                    <button>Sign me up!</button>
                    <p>By signing up, you accept the Smartsplit Terms of Service.</p>
                    <p>Don't use USD for currency? <a style={{ color: "rgba(18, 154, 234, 1)" }}>Click here.</a></p>
                </form>

            </div>
        )
    }
}