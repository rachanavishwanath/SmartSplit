import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import LoadingReducer from './loading_reducer';
export default combineReducers({
    modal: modalReducer,
})
