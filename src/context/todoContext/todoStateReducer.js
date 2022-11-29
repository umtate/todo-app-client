import { todoStateTypes } from "./todoStateActions";

export const todoInitialState = {
  userId: null,
  status: "",
  description: "",
  loading: false,
  loaded: false,
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case todoStateTypes.GET_TODO_STATE:
      return {
        ...state,
        loading: true,
      };
    case todoStateTypes.GET_TODO_STATE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        loaded: true,
      };
    case todoStateTypes.GET_TODO_STATE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
      };

    case todoStateTypes.CREATE_TODO_STATE:
      return {
        ...state,
        loading: true,
      };
    case todoStateTypes.CREATE_TODO_STATE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        loaded: true,
      };
    case todoStateTypes.CREATE_TODO_STATE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
      };

    case todoStateTypes.UPDATE_TODO_STATUS_STATE:
      return {
        ...state,
        loading: true,
      };
    case todoStateTypes.UPDATE_TODO_STATUS_STATE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        loaded: true,
      };
    case todoStateTypes.UPDATE_TODO_STATUS_STATE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
      };

    case todoStateTypes.UPDATE_TODO_DESCRIPTION_STATE:
      return {
        ...state,
        loading: true,
      };
    case todoStateTypes.UPDATE_TODO_DESCRIPTION_STATE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        loaded: true,
      };
    case todoStateTypes.UPDATE_TODO_DESCRIPTION_STATE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
      };

    default:
      return {
        ...todoInitialState,
      };
  }
};
