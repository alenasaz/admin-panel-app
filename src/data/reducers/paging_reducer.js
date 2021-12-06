import { PRODUCTS_PAGING } from '../action_types'

const initState = {
    currentPage: 2,
    size: 5,
}

export function pagingReducer(initialState = initState, action) {
    switch (action.type) {
        case PRODUCTS_PAGING: {
            return {
                ...initialState,
                currentPage: action.newCurrentPage + 1,
            }
        }
        default: {
            return initialState;
        }
    }
}