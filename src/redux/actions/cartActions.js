import { CartActionTypes } from "../constants/cart-action-types";

export const addToCart = (product) => {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: product,
  };
};
