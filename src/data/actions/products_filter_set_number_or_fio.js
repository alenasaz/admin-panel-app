import { PRODUCTS_FILTER_SET_NUMBER_OR_FIO } from "../action_types";

export function productsFilterSetNumFioAcion(newFilterNumFio) {
  return {
    type: PRODUCTS_FILTER_SET_NUMBER_OR_FIO,
    newFilterNumFio,
  };
}
