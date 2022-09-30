import { FilterActionTypes } from "../constants/filter-action-types";

const initialState = {
  filteredItems: []
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FilterActionTypes.FILTER_PRODUCTS:
      return { ...state, filteredItems: action.payload };
    default:
      return state;
  }
};
