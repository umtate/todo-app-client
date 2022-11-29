import { userStateTypes } from "./userStateActions";

export const userInitialState = {
  name: null,
  id: null,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case userStateTypes.GET_USER_STATE:
      return {
        ...state,
        loading: true,
      };
    case userStateTypes.GET_USER_STATE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        loaded: true,
      };
    case userStateTypes.GET_USER_STATE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
      };

    case userStateTypes.CREATE_USER_STATE:
      return {
        ...state,
        loading: true,
      };
    case userStateTypes.CREATE_USER_STATE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        loaded: true,
      };
    case userStateTypes.CREATE_USER_STATE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
      };

    default:
      return {
        ...userInitialState,
      };
  }
};
