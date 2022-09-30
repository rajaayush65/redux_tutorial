import { FilterActionTypes } from "../constants/filter-action-types";

export const filterProduct = (items, category) => {
  const filteredItems = items.filter(item => item.category === category);
  return {
    type: FilterActionTypes.FILTER_PRODUCTS,
    payload: filteredItems
  };
};
