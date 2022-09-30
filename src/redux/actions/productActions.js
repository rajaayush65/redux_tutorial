import { ProductActionTypes } from "../constants/product-action-type";
import { getProducts } from "../../api/index";

export const setProducts = () => async dispatch => {
  try {
    dispatch({ type: ProductActionTypes.PRODUCT_LIST_REQUEST });
    const data = await getProducts().then(res => res.data);
    dispatch({ type: ProductActionTypes.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ProductActionTypes.PRODUCT_LIST_FAIL,
      payload: error.message
    });
  }
};


