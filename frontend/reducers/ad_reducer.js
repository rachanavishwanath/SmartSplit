import { RECEIVE_ADDITIONAL_DETAIL } from '../actions/ad_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ADDITIONAL_DETAIL:
            return action.ad;

        default:
            return state;
    }
}