import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import expensesReducer from './expenses_reducer';
import categoriesReducer from './categories_reducer';
import expenseDetailsReducer from './expense_details_reducer';
import friendshipReducer from './friends_reducer';
import adReducer from './ad_reducer';
import invitedReducer from './invited_reducer';

export default combineReducers({
    users: usersReducer,
    expenses: expensesReducer,
    categories: categoriesReducer,
    exenseDetails: expenseDetailsReducer,
    friendships: friendshipReducer,
    additional_details: adReducer,
    invitedFriend: invitedReducer
})