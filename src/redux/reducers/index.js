import { combineReducers } from "@reduxjs/toolkit";
import { inputChangeReducer } from "./inputChangeReducer";
import { authReducer } from "./authReducer";
import { getProductsReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { filterReducer } from "./filterReducer";

const reducers = combineReducers({
  changeValue: inputChangeReducer,
  auth: authReducer,
  allProducts: getProductsReducer,
  basket: cartReducer,
  filter: filterReducer
});

export default reducers;
