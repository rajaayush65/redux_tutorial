import { InputActionTypes } from "../constants/input-action-types";

export const changeEmail = (email) => {
  return {
    type: InputActionTypes.EMAIL_CHANGE,
    payload: email,
  };
};

export const changePassword = (password) => {
  return {
    type: InputActionTypes.PASSWORD_CHANGE,
    payload: password,
  };
};
