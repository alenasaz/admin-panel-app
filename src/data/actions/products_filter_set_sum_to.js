import { PRODUCTS_FILTER_SET_SUM_TO} from "../action_types";

export function productsFilterSetSumToAcion(newFilterSumTo) {
  return {
    type: PRODUCTS_FILTER_SET_SUM_TO,
    newFilterSumTo,
  };
}
