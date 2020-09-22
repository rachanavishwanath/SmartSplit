import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';
// why is thunk blue? it should be yellow

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
    // must use 'require' (import only allowed at top of file)
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

export default (preloadedStore = {}) => {
    return createStore(rootReducer, preloadedStore, applyMiddleware(...middlewares))
}