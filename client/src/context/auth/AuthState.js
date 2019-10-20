import React, { useReducer } from 'react';
import AuthContact from './AuthContact';
import authReducer from './AuthReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  // LOAD USER

  // REGISTER USER

  // LOGIN USER

  // LOGOUT

  // CLEAR ERRORS

  return (
    <AuthContact.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error
      }}
    >
      {props.children}
    </AuthContact.Provider>
  );
};

export default AuthState;
