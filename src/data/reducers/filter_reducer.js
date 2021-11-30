import { PRODUCTS_FILTER_SET_DATE, PRODUCTS_FILTER_SET_SUM_FROM, PRODUCTS_FILTER_SET_SUM_TO, PRODUCTS_FILTER_SET_NUMBER_OR_FIO, PRODUCTS_FILTER_CLEAR } from "../action_types";

const initState = {
    FilterDate:'',
    FilterSumFrom: '',
    FilterSumTo: '',
    FilterNumFio:'',
}

export function filterReducer(initialState = initState, action)
{
    switch (action.type) {
        case PRODUCTS_FILTER_SET_DATE: {
            return {
                ...initialState,
                FilterDate: action.newFilterDate,

            }
        }
        case PRODUCTS_FILTER_SET_SUM_FROM: {
            return {
                ...initialState,
                FilterSumFrom: action.newFilterSumFrom,

            }
        }

        case PRODUCTS_FILTER_SET_SUM_TO: {
            return {
                ...initialState,
                FilterSumTo: action.newFilterSumTo,

            }
        }

        case PRODUCTS_FILTER_SET_NUMBER_OR_FIO: {
            return {
                ...initialState,
                FilterNumFio: action.newFilterNumFio,

            }
        }
        case PRODUCTS_FILTER_CLEAR: {
            return {
              ...initialState,
              FilterDate:'',
              FilterSumFrom: '',
              FilterSumTo: '',
              FilterNumFio:'',
            }
          }

    default: 
    return initialState
}
}