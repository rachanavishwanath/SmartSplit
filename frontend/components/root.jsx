import { Provider } from 'react-redux';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from './App';

export default ({ store }) => {
    return(
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    )
}