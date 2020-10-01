import React from 'react';
import {connect} from 'react-redux';
import AdditionalDetails from './additional_details';
import { fetchADs, createAD, deleteAD } from '../../../actions/ad_actions';

const mSTP = (state, ownProps) => {
    const expenseId = ownProps.expense.id
    return {
        additionalDetails: Object.values(state.entities.additional_details),
        expenseId,
        currentUser: state.entities.users[state.session.id],
        friends: Object.values(state.entities.users)[0].friends,
    }
}

const mDTP = dispatch => {
    return {
        createAD: ad => dispatch(createAD(ad)),
        fetchADs: expenseId => dispatch(fetchADs(expenseId)),
        deleteAD: adId => dispatch(deleteAD(adId))
    }
}

export default connect(mSTP, mDTP)(AdditionalDetails);