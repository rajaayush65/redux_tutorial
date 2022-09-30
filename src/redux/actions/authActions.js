import { AuthActionTypes } from "../constants/auth-action-types";

export const login = () => {
  return {
    type: AuthActionTypes.LOGIN,
  };
};

export const logout = () => {
  return {
    type: AuthActionTypes.LOGOUT,
  };
};
