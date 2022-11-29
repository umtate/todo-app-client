import { todosStateTypes } from "./todosStateActions";

export const todosInitialState = {
  loading: false,
  loaded: false,
  data: [],
};

export const todosReducer = (state, action) => {
  switch (action.type) {
    case todosStateTypes.GET_TODOS_STATE:
      return {
        ...state,
        loading: true,
      };
    case todosStateTypes.GET_TODOS_STATE_SUCCESS:
      return {
        ...state,
        data : action.payload,
        loading: false,
        loaded: true,
      };
    case todosStateTypes.GET_TODOS_STATE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
      };

    default:
      return {
        ...todosInitialState,
      };
  }
};
