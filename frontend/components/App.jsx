import React from 'react';
import GreetingContainer from '../components/greeting/greeting_container';
import {Route, Switch} from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import ActivityContainer from '../components/Dashboard/activity/activity_container';
import DashboardContainer from './Dashboard/dashboard_container';
import FriendExpenseContainer from './Dashboard/centerDashboard/friend_expense_container';
import AllExpensesContainer from './Dashboard/LeftDashboard/all_expenses_container';
import Loading from './loading/loading';

export default () => {
    return (
        <div>
            <Modal />
            <Loading />
            <Switch>
                <ProtectedRoute path="/activity" component={ActivityContainer}/>
                <ProtectedRoute path="/all" component={AllExpensesContainer} />
                <ProtectedRoute path="/dashboard" component={DashboardContainer}/>
                <ProtectedRoute path="/friends/:friend_id" component={FriendExpenseContainer} />
                {/* <ProtectedRoute path="/" component={LeftDashboardContainer} /> */}
                <Route exact path="/" component={GreetingContainer} />
                {/* <ProtectedRoute path='/' component={GreetingContainer} /> */}
                <AuthRoute path="/login" component={LoginFormContainer}/>
                <AuthRoute path="/signup" component={SignupFormContainer} />
            </Switch>
            {/* <LeftDashboardContainer/> */}
        </div>
    )
}