import { PRODUCTS_FILTER_SET_DATE_TO } from "../action_types";

export function productsFilterSetDateToAcion(newFilterDateTo) {
  return {
    type: PRODUCTS_FILTER_SET_DATE_TO,
    newFilterDateTo,
  };
}
