import React, { useReducer } from "react";
import { todosInitialState, todosReducer} from "./todosStateReducer";
import { todosStateTypes as actions } from "./todosStateActions";

export const TodosStateContext = React.createContext(todosInitialState);

export const TodosStateContextProvider = (props) => {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);

  const value = {
    todos: state,
    getTodosDetails: () => {
      dispatch({ type: actions.GET_TODOS_STATE });
    },
    getTodosDetailsSuccess: (payload) => {
      dispatch({ type: actions.GET_TODOS_STATE_SUCCESS, payload });
    },
    getTodosDetailsFail: () => {
      dispatch({ type: actions.GET_TODOS_STATE_FAIL });
    },
  };

  return (
    <TodosStateContext.Provider value={value}>
      {props.children}
    </TodosStateContext.Provider>
  );
};
