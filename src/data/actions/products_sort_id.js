import { PRODUCTS_SORT } from "../action_types"; 
 
export function productsSortAction (column) { 
    return { 
        type: PRODUCTS_SORT, 
        column, 
    } 
}