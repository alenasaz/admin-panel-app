import {PRODUCTS_ITEM_CLICK, PRODUCTS_NAME_EDIT, PRODUCTS_STATUS_EDIT} from "../action_types";

const initState = {
    fullName:'',
    status:'',
    date:'',
}

export function productsFormReducer(initialState=initState, action) {

    switch (action.type) { 
        case PRODUCTS_ITEM_CLICK: { 
            console.log(action);
            const { fullName, status, date} = action;
            return { 
                ...initialState, 
                fullName,
                status, 
                date
                
            }
        }
        case PRODUCTS_NAME_EDIT: { 
            return { 
                ...initialState, 
                fullName: action.fullName, 
            } 
        } 
        case PRODUCTS_STATUS_EDIT: { 
            return { 
                ...initialState, 
                status: action.status, 
            } 
        }
        default: {
            return initialState;
        }

}
}