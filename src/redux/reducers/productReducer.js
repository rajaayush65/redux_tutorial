import { ProductActionTypes } from "../constants/product-action-type";

const initialState = {
  products: [],
  loading: true
};

export const getProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };
    case ProductActionTypes.PRODUCT_LIST_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case ProductActionTypes.PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ProductActionTypes.FILTER_LIST_PRODUCT:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
