import React, { useReducer } from "react";
import { todoInitialState, todoReducer} from "./todoStateReducer";
import { todoStateTypes as actions } from "./todoStateActions";

export const TodoStateContext = React.createContext(todoInitialState);

export const TodoStateContextProvider = (props) => {
  const [state, dispatch] = useReducer(todoReducer, todoInitialState);

  const value = {
    todo: state,
    getTodoDetails: () => {
      dispatch({ type: actions.GET_TODO_STATE });
    },
    getTodoDetailsSuccess: (payload) => {
      dispatch({ type: actions.GET_TODO_STATE_SUCCESS, payload });
    },
    getTodoDetailsFail: () => {
      dispatch({ type: actions.GET_TODO_STATE_FAIL });
    },

    createTodoDetails: () => {
      dispatch({ type: actions.CREATE_TODO_STATE });
    },
    createTodoDetailsSuccess: (payload) => {
      dispatch({ type: actions.CREATE_TODO_STATE_SUCCESS, payload });
    },
    createTodoDetailsFail: () => {
      dispatch({ type: actions.CREATE_TODO_STATE_FAIL });
    },


    updateStatusTodoDetails: () => {
      dispatch({ type: actions.UPDATE_TODO_STATUS_STATE });
    },
    updateStatusTodoDetailsSuccess: (payload) => {
      dispatch({ type: actions.UPDATE_TODO_STATUS_STATE_SUCCESS, payload });
    },
    updateStatusTodoDetailsFail: () => {
      dispatch({ type: actions.UPDATE_TODO_STATUS_STATE_FAIL });
    },

    updateDescriptionTodoDetails: () => {
      dispatch({ type: actions.UPDATE_TODO_DESCRIPTION_STATE });
    },
    updateDescriptionTodoDetailsSuccess: (payload) => {
      dispatch({ type: actions.UPDATE_TODO_DESCRIPTION_STATE_SUCCESS, payload });
    },
    updateDescriptionTodoDetailsFail: () => {
      dispatch({ type: actions.UPDATE_TODO_DESCRIPTION_STATE_FAIL });
    },
  };

  return (
    <TodoStateContext.Provider value={value}>
      {props.children}
    </TodoStateContext.Provider>
  );
};
