import React, { userState } from 'react';
import ErrorList from './error_list';
import LoginNavBar from './login_navbar';
// import FlashMessage from 'react-flash-message';
// import { Message } from 'semantic-ui-react';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formError: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        // const [status, setStatus] = userState(false);
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
            this.setState({ formError: true})
            return this.props.history.push('/');
        });
        this.setState({
            email: '',
            password: '',
            formError: false
        })
    }

    render() {
        // const msg = this.state.formError ? (
        //                 <Message
        //                     positive
        //                     header="You are logged in"
        //                 />
        //             ) : (
        //                 <Message
        //                     negative
        //                     header="You are not logged in"
        //                 />
        //             )
        return (
            <div>
                <ErrorList errors={this.props.errors}/>
                <LoginNavBar />
                <div className="login-form">
                    <h3>WELCOME TO SPLITWISE</h3>
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
                        <button className="login-bttn">Log in</button>
                        <p>Forgot your password? <a>Click here</a></p>
                    </form>
                </div>
            </div>
        )
    }
}