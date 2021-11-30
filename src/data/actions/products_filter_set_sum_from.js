import { PRODUCTS_FILTER_SET_SUM_FROM} from "../action_types";

export function productsFilterSetSumFromAcion(newFilterSumFrom) {
  return {
    type: PRODUCTS_FILTER_SET_SUM_FROM,
    newFilterSumFrom,
  };
}
