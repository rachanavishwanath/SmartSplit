import { 
    RECEIVE_ADDITIONAL_DETAIL, 
    RECEIVE_ALL_ADDITIONAL_DETAILS,
    REMOVE_ADDITIONAL_DETAIL 
} from '../actions/ad_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch(action.type) {

        case RECEIVE_ALL_ADDITIONAL_DETAILS:
            return action.ads;

        case RECEIVE_ADDITIONAL_DETAIL:
            return Object.assign({}, state, {[action.ad.id]: action.ad})

        case REMOVE_ADDITIONAL_DETAIL:
            newState = Object.assign({}, state);
            delete newState[action.adId];
            return newState;

        default:
            return state;
    }
}