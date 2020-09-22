import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {
//     signup,
//     login,
//     logout
// } from './util/session_api_util';
import { signup, login, logout } from './actions/session_action';

document.addEventListener('DOMContentLoaded',() => {
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    const store = configureStore();
    window.store = store;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
})