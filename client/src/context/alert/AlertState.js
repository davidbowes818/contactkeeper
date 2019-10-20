import React, { useReducer } from 'react';
import uuid from 'uuid';
import AlertContact from './AlertContext';
import alertReducer from './AlertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initialState = [];
  const [state, dispatch] = useReducer(alertReducer, initialState);

  // SET ALERT

  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuid.v4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <AlertContact.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContact.Provider>
  );
};

export default AlertState;
