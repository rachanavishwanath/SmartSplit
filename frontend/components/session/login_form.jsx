import React from 'react';
import ErrorList from './error_list';
import LoginNavBar from './login_navbar';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => {
            return this.props.history.push('/')
        });
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div className="login-form">
                <ErrorList errors={this.props.errors}/>
                <LoginNavBar />
                <h3>WELCOME TO SPLITWISE</h3>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label>Email address
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')} />
                    </label>
                    <label>Password
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}