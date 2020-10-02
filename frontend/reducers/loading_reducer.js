import { FETCHING, FETCHED } from '../actions/loading_actions';

const initialState = {
    loading: false
}

export default (state = initialState, action) => {
    Object.freeze(state);
    switch(action.type) {

        case FETCHING:
            return {
                loading: true
            }
        case FETCHED: 
            return {
                loading: false
            }
        default:
            state
    }
}