import React from 'react';
import { connect } from 'react-redux';
import { updateExpense } from '../../../actions/expense_action';
import ExpenseForm from './expenseForm';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { fetchAllCategories } from '../../../actions/category_actions';
import { updateExpenseDetail } from '../../../actions/expense_detail_action';
import { fetchAllFriends } from '../../../actions/friend_action';
import { category, myNotes } from '../../../reducers/selectors';
import { updateAD } from '../../../actions/ad_actions';
import { fetchCurrentUser } from '../../../actions/session_action';
import { fetchAllExpenses } from '../../../actions/expense_action';

const mSTP = (state, ownProps) => {
    const expense = ownProps.expense;
    const friend = Object.values(state.entities.users)[0].friends.filter(function(x) {return x.friend_id === ownProps.expense.payable_id});
    const ad = myNotes(state.entities.additional_details, expense.additional_detail_ids, state.session.id);
    const ed = state.entities.exenseDetails[expense.expense_detail_ids[0]]
    return {
        expense: { 
            id: expense.id,
            name: friend[0].name,
            desc: expense.desc,
            amount: expense.amount,
            category_id: expense.category_id,
            payable_type: expense.payable_type,
            payable_id: expense.payable_id,
            split_type: expense.split_type,
            active: true,
            date: new Date(),
            openCatModal: false,
            openEDModal: false,
            show: false,
            openCal: false,
            openNotes: false,
            openInviteFriend: false,
            openSplitType: false,
            edId: ed.id,
            expense_id: expense.id,
            paid_by: ed.paid_by,
            amount_paid: ed.amount_paid,
            adId: ad.id,
            author_id: state.session.id,
            notes: ad.notes,
            asset_url: '',
            assetFile: null,
        },
        users: state.entities.users,
        friends: Object.values(state.entities.users)[0].friends,
        categories: category(state.entities.categories),
        friendsships: state.entities.friendships,
        formType: 'Edit'
    }
}

const mDTP = dispatch => {
    return {
        processForm: (expense) => dispatch(updateExpense(expense)),
        fetchAllExpenses: (friendId) => dispatch(fetchAllExpenses(friendId)),
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal(modal)),
        fetchAllCategories: () => dispatch(fetchAllCategories()),
        fetchAllFriends: () => dispatch(fetchAllFriends()),
        createAD: (ad) => dispatch(updateAD(ad)),
        fetchCurrentUser: () => dispatch(fetchCurrentUser()),
        createExpenseDetail: (expenseDetail) => dispatch(updateExpenseDetail(expenseDetail))
    }
}

export default connect(mSTP, mDTP)(ExpenseForm);