import * as ADUtil from '../util/ad_util';

export const RECEIVE_ADDITIONAL_DETAIL = 'RECEIVE_ADDITIONAL_DETAIL';
export const RECEIVE_ALL_ADDITIONAL_DETAILS = 'RECEIVE_ALL_ADDITIONAL_DETAILS';
export const REMOVE_ADDITIONAL_DETAIL = 'REMOVE_ADDITIONAL_DETAIL';

const receiveAdditionalDetail = ad => {
    return {
        type: RECEIVE_ADDITIONAL_DETAIL,
        ad
    }
}

const receiveAllAdditionalDetails = ads => {
    return {
        type: RECEIVE_ALL_ADDITIONAL_DETAILS,
        ads
    }
}

const removeAdditionalDetail = adId =>{
    return {
        type: REMOVE_ADDITIONAL_DETAIL,
        adId
    }
}

export const deleteAD = adId => dispatch => {
    const id = adId;
    return ADUtil.deleteAD(adId).then(() => {
        return dispatch(removeAdditionalDetail(id))
    })
}

export const fetchADs = expenseId => dispatch => {
    return ADUtil.fetchAllAD(expenseId).then(ads => {
        return dispatch(receiveAllAdditionalDetails(ads))
    })
}
export const createAD = ad => dispatch => {
    return ADUtil.createdAD(ad).then(ad => {
        return dispatch(receiveAdditionalDetail(ad))
    })
}

export const updateAD = ad => dispatch => {
    return ADUtil.updateAD(ad).then(ad => {
        return dispatch(receiveAdditionalDetail(ad))
    })
}