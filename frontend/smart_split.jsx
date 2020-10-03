import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchAllAD } from './util/ad_util';
import { addFriend } from './actions/friend_action';

document.addEventListener('DOMContentLoaded',() => {
    window.fetchAllAD = fetchAllAD;
    window.addFriend = addFriend;
    
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