import { combineReducers } from "redux";
import { productListReducer } from "./list_reducer";
import { filterReducer } from "./filter_reducer";
import { sortReducer } from "./sort_reducer";

export default combineReducers({
    productListReducer,
    filterReducer,
    sortReducer
})
