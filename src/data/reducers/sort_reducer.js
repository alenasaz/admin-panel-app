import {PRODUCTS_SORT} from "../action_types"; 
import {ID_COL} from "../products_table_column";
 
const initState = { 
    column: ID_COL, 
    ascending: true, 
} 
 
export function sortReducer(initialState = initState, action) { 
    switch (action.type) { 
        case PRODUCTS_SORT: { 
            return { 
                ...initialState, 
                column: action.column, 
                ascending: initialState.column !== action.column ? true : !initialState.ascending, 
            } 
        } 
        default: { 
            return initialState; 
        } 
    } 
}