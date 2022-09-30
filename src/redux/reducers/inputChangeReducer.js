import { InputActionTypes } from "../constants/input-action-types";

const initialValues = {
  email: "abcd@email.com",
  password: "Abcd1234*",
};

export const inputChangeReducer = (state = initialValues, action) => {
  switch (action.type) {
    case InputActionTypes.EMAIL_CHANGE:
      return { ...state, email: action.payload };
    case InputActionTypes.PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
