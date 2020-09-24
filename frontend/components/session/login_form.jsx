import React from 'react';
import ErrorList from './login_error_list';
import LoginNavBar from './login_navbar';
import Footer from '../greeting/footer';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => {
            this.setState({  })
            return this.props.history.push('/');
        });
        this.setState({
            email: '',
            password: ''
        })
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.processForm({ email: 'demo@email.com', password: '123456789'}).then(() => {
            return this.props.history.push('/');
        });
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div className="login-container">  
                <LoginNavBar />
                <ErrorList errors={this.props.errors} />
                <div className="login-page">
                    <img src={window.logo} alt="logo"/>
                    <div className="login-form">
                        <h3>WELCOME TO SMARTSPLIT</h3>
                        <form className="form2" onSubmit={this.handleSubmit}>
                            <label>Email address <br/>
                                <input
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')} />
                            </label>
                            <br /><br />
                            <label>Password<br />
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')} />
                            </label>
                            <br /><br />
                            <div className="login-options">
                                <button className="login-bttn">Log in</button>
                                <button className="demo-user" onClick={this.demoLogin}>Demo</button>
                            </div>
                            <p>Forgot your password? <a>Click here</a></p>
                        </form>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        )
    }
}