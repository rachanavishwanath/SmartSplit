import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveCurrentUser = user => {
  return {
      type: RECEIVE_CURRENT_USER,
      user
  }  
}

const logoutCurrentUser = () => {

    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveSessionErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

export const login = user => dispatch => {
    return SessionApiUtil.login(user).then(user => {
        return dispatch(receiveCurrentUser(user))
    }, response => {
        return dispatch(receiveSessionErrors(response.responseJSON))
    })
}

export const signUpInvitedUser = (user, currentUser) => dispatch => {
    return SessionApiUtil.signup(user).then(user => {
        return dispatch(receiveUser(user))
    }, response => {
        return dispatch(receiveSessionErrors(response.responseJSON))
    })
}

export const signup = user => dispatch => {
    return SessionApiUtil.signup(user).then(user => {
        return dispatch(receiveCurrentUser(user))
    }, response => {
            return dispatch(receiveSessionErrors(response.responseJSON))
    })
}

export const logout = () => dispatch => {
    return SessionApiUtil.logout().then(() => {
        dispatch(logoutCurrentUser())
    }, response => {
        return dispatch(receiveSessionErrors(response.responseJSON))
    })
}

export const fetchCurrentUser = () => dispatch => {
    return SessionApiUtil.fetchCurrentUser().then((user) => {
        return dispatch(receiveCurrentUser(user))
    })
}