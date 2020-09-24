import React from 'react';
import GreetingContainer from '../components/greeting/greeting_container';
import {Route} from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
export default () => {
    return (
        <div>
            {/* <h1>SmartSplit!</h1> */}
            <Route exact path="/" component={GreetingContainer} />
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
    )
}