import * as ADUtil from '../util/ad_util';

export const RECEIVE_ADDITIONAL_DETAIL = 'RECEIVE_ADDITIONAL_DETAIL';

const receiveAdditionalDetail = ad => {
    return {
        type: RECEIVE_ADDITIONAL_DETAIL,
        ad
    }
}

export const createAD = ad => dispatch => {
    return ADUtil.createdAD(ad).then(ad => {
        return dispatch(receiveAdditionalDetail(ad))
    })
}