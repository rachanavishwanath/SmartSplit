import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CreateExpenseContainer from '../Dashboard/expense/create_expense_container';
import AddFriendContainer from '../Dashboard/LeftDashboard/add_friend_container';

function Modal ({modal, closeModal}) {
    if (!modal) { return null; }
    let component;
    switch(modal) {
        case ('expense'):
            component = <CreateExpenseContainer/>
            break;
            
        case('add-friend'):
            component = <AddFriendContainer/>
            break; 

        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const mSTP = state => {
    return {
        modal: state.ui.modal
    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(Modal);