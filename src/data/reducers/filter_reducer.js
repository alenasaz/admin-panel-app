import {
  PRODUCTS_FILTER_SET_DATE,
  PRODUCTS_FILTER_SET_DATE_TO,
  PRODUCTS_FILTER_SET_SUM_FROM,
  PRODUCTS_FILTER_SET_SUM_TO,
  PRODUCTS_FILTER_SET_NUMBER_OR_FIO,
  PRODUCTS_FILTER_CLEAR,
} from "../action_types";

const initState = {
  FilterDate:  '1.0.1960',
  FilterDateTo: '0.0.9999',
  FilterSumFrom: 0,
  FilterSumTo: 99999999999,
  FilterNumFio: "",
};

export function filterReducer(initialState = initState, action) {
  switch (action.type) {
    case PRODUCTS_FILTER_SET_DATE: {
      return {
        ...initialState,
        FilterDate: (action.newFilterDate !== "") ? action.newFilterDate : '1.0.1960',
        //FilterDate: action.newFilterDate,
      };
    }
    case PRODUCTS_FILTER_SET_DATE_TO: {
      return {
        ...initialState,
        FilterDateTo: (action.newFilterDateTo !== "") ? action.newFilterDateTo : '0.0.9999',
        //FilterDateTo: action.newFilterDateTo,
      };
    }
    case PRODUCTS_FILTER_SET_SUM_FROM: {
      return {
        ...initialState,
        FilterSumFrom: (action.newFilterSumFrom !== "") ? action.newFilterSumFrom : 0,
        //FilterSumFrom: action.newFilterSumFrom,
      };
    }

    case PRODUCTS_FILTER_SET_SUM_TO: {
      return {
        ...initialState,
        FilterSumTo: (action.newFilterSumTo !== "") ? action.newFilterSumTo : 999999999999,
        //FilterSumTo: action.newFilterSumTo,
      };
    }

    case PRODUCTS_FILTER_SET_NUMBER_OR_FIO: {
      return {
        ...initialState,
        FilterNumFio: action.newFilterNumFio,
      };
    }
    case PRODUCTS_FILTER_CLEAR: {
      return {
        ...initialState,
        FilterDate:  '1.0.1960',
        FilterDateTo: '0.0.9999',
        FilterSumFrom: 0,
        FilterSumTo: 99999999999,
        FilterNumFio: "",
      };
    }

    default:
      return initialState;
  }
}
