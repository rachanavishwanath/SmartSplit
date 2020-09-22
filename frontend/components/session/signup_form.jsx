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
                <ErrorList errors={this.props.errors} />
                <h3>INTRODUCE YOURSELF</h3>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label>Hi there! My name is
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.update('name')} />
                    </label>
                    <label>Here’s my email address:
                        <input 
                            type="text" 
                            value={this.state.email} 
                            onChange={this.update('email')}/>
                    </label>
                    <label>And here’s my password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    <button>Sign me up!</button>
                </form>
            </div>
        )
    }
}