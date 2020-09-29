import * as CategoryApiUtil from '../util/category_util';

export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';

const receiveAllCategories = categories => {
    return {
        type: RECEIVE_ALL_CATEGORIES,
        categories
    }
}

export const fetchAllCategories = () => dispatch => {
    return CategoryApiUtil.fetchAllCategories().then(categories => {
        return dispatch(receiveAllCategories(categories))
    })
}