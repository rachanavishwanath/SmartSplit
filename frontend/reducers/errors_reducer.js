import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import expenseErrorReducer from '../reducers/expense_errors_reducer';
import addFriendErrorReducer from '../reducers/addFriend_errors_reducer';

export default combineReducers({
    session: sessionErrorsReducer,
    expense: expenseErrorReducer,
    addFriend: addFriendErrorReducer
})