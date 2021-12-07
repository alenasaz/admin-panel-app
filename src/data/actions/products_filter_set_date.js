import { PRODUCTS_FILTER_SET_DATE } from "../action_types";

export function productsFilterSetDateAcion(newFilterDate) {
  return {
    type: PRODUCTS_FILTER_SET_DATE,
    newFilterDate,
  };
}
