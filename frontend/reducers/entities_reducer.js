import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import expensesReducer from './expenses_reducer';
import categoriesReducer from './categories_reducer';

export default combineReducers({
    users: usersReducer,
    expenses: expensesReducer,
    categories: categoriesReducer
})