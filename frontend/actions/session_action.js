import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = user => {
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