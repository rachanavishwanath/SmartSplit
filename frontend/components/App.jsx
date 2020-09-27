import React from 'react';
import GreetingContainer from '../components/greeting/greeting_container';
import {Route, Switch} from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import DashboardContainer from './Dashboard/dashboard_container';
import AllExpensesContainer from './Dashboard/LeftDashboard/all_expenses_container';
export default () => {
    return (
        <div>
            <Modal />
            <Switch>
                <ProtectedRoute path="/all" component={AllExpensesContainer} />
                <ProtectedRoute path="/dashboard" component={GreetingContainer}/>
                <Route exact path="/" component={GreetingContainer} />
                {/* <ProtectedRoute path='/' component={GreetingContainer} /> */}
                <AuthRoute path="/login" component={LoginFormContainer}/>
                <AuthRoute path="/signup" component={SignupFormContainer} />
            </Switch>
        </div>
    )
}