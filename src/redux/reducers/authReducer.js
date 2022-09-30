import { AuthActionTypes } from "../constants/auth-action-types";

const initialAuthState = {
  isAuthenticated: false
};

export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return { ...state, isAuthenticated: true };
    case AuthActionTypes.LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};
