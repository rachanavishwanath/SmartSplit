import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {
    fetchallExpenses,
    fetchExpense,
    createExpense,
    updateExpense,
    deleteExpense
} from './util/expenses_util';
import { signup, login, logout } from './actions/session_action';

document.addEventListener('DOMContentLoaded',() => {
    window.fetchallExpenses = fetchallExpenses;
    window.fetchExpense = fetchExpense;
    window.createExpense = createExpense;
    window.updateExpense = updateExpense;
    window.deleteExpense = deleteExpense;
    let store;
    if (window.currentUser) {
        const preloadedState ={
            entities: {users: { [window.currentUser.id]: window.currentUser }},
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState)
    } else {
        store = configureStore();
    }
    window.store = store;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
})