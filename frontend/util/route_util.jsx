import React from 'react';
import {connect} from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, exact}) => {
   return <Route path={path} exact={exact} render={props => {
       return !loggedIn ? (
            <Component {...props} />
       ) : (
            <Redirect to= "/"/>
       )
   }}
    />
};

const mSTP = state => {
    return {loggedIn: Boolean(state.session.id)}
}

export const AuthRoute = withRouter(connect(mSTP)(Auth));