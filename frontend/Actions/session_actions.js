import * as Session_API_Util from '../Util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'; 
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'; 
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({ 
  type: RECEIVE_CURRENT_USER, 
  currentUser 
})

export const logoutCurrentUser = () => ({ 
  type: LOGOUT_CURRENT_USER
})

export const receiveErrors = (errors) => ({ 
  type: RECEIVE_SESSION_ERRORS, 
  errors
})

export const signup = user => dispatch => ( 
  Session_API_Util.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
)

export const login = user => dispatch => (
  Session_API_Util.login(user).then( 
    user => dispatch(receiveCurrentUser(user)), 
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
)

export const logout = () => dispatch => ( 
  Session_API_Util.logout().then( 
    () => dispatch(logoutCurrentUser()), 
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
)