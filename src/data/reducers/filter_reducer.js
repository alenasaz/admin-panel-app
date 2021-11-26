import { PRODUCTS_FILTER_SET_DATE } from "../action_types";

const initState = {
    FilterDate:'',
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

    default: 
    return initialState
}
}