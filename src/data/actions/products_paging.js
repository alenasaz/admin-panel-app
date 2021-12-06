import {PRODUCTS_PAGING} from "../action_types";

export function productsPagingAction (newCurrentPage) {
    return {
        type: PRODUCTS_PAGING,
        newCurrentPage
    }
}