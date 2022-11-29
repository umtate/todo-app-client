import React, { useReducer } from "react";
import { userInitialState, userReducer} from "./userStateReducer";
import { userStateTypes as actions } from "./userStateActions";

export const UserStateContext = React.createContext(userInitialState);

export const UserStateContextProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, userInitialState);

  const value = {
    user: state,
    getUserDetails: () => {
      dispatch({ type: actions.GET_USER_STATE });
    },
    getUserDetailsSuccess: (payload) => {
      dispatch({ type: actions.GET_USER_STATE_SUCCESS, payload });
    },
    getUserDetailsFail: () => {
      dispatch({ type: actions.GET_USER_STATE_FAIL });
    },

    createUserDetails: () => {
      dispatch({ type: actions.CREATE_USER_STATE });
    },
    createUserDetailsSuccess: (payload) => {
      dispatch({ type: actions.CREATE_USER_STATE_SUCCESS, payload });
    },
    createUserDetailsFail: () => {
      dispatch({ type: actions.CREATE_USER_STATE_FAIL });
    },
  };

  return (
    <UserStateContext.Provider value={value}>
      {props.children}
    </UserStateContext.Provider>
  );
};
