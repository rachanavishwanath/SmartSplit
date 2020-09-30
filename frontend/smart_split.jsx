import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchAllExpenseDetails, createExpenseDetail } from './actions/expense_detail_action';
import { fetchExpenseDetails } from './util/expense_detail_util';
import { fetchAllCategories } from './actions/category_actions';
import { fetchAllFriends } from './actions/friend_action';

document.addEventListener('DOMContentLoaded',() => {
    window.fetchAllCategories = fetchAllCategories;
    window.fetchAllExpenseDetails = fetchAllExpenseDetails;
    window.createExpenseDetail = createExpenseDetail;
    window.fetchExpenseDetails = fetchExpenseDetails;
    window.fetchAllFriends = fetchAllFriends;
    let store;
    if (window.currentUser) {
        const preloadedState = {
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