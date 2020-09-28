import React from 'react';
import ErrorList from './signup_error_list';

export default class SignUpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            active: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field){
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            })
            if (e.currentTarget.className === 'primary-field'){
                this.setState({ active: true })
            }
        }
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.login({ email: 'demo@email.com', password: '123456789' }).then(() => {
            return this.props.history.push('/dashboard');
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state).then(() => {
            return this.props.history.push('/dashboard')
        });
        this.setState({
            name: '',
            email: '',
            password: '',
            active: false
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
                            className="primary-field"
                            type="text"
                            value={this.state.name}
                            onChange={this.update('name')} />
                    </label>
                    <br /><br />
                    <div className = {this.state.active ? "appear" : "hidden"}>
                        <label>Here’s my email address: <br />
                            <input 
                                type="text" 
                                value={this.state.email} 
                                onChange={this.update('email')}/>
                        </label>
                        {/* {this.isValidEmail(this.state.email)} */}
                        <br /><br />
                        <label>And here’s my password: <br />
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')} />
                        </label>
                        <br /><br />
                    </div>
                    <button>Sign me up!</button>
                    <p>By signing up, you accept the Smartsplit Terms of Service.</p>
                    <p>Don't have an account yet? <a style={{ color: "rgba(18, 154, 234, 1)" }} onClick={this.demoLogin}>Login as a demo user.</a></p>
                </form>

            </div>
        )
    }
}