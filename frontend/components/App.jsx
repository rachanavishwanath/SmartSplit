import React from 'react';
import GreetingContainer from '../components/greeting/greeting_container';
import {Route} from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

export default () => {
    return (
        <div>
            <h1>SmartSplit!</h1>
            <GreetingContainer />
            <Route path="/login" component={LoginFormContainer}/>
            <Route path="/signup" component={SignupFormContainer} />
        </div>
    )
}