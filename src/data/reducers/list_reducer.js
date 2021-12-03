import productsList from '../list.json';
import { PRODUCTS_ITEM_CLICK, PRODUCTS_FORM_SAVE } from '../action_types';

const initState = {
    productsList:productsList,
    isOpenEditForm:false
}

export function productListReducer(initialState=initState, action)
{

    switch (action.type) { 
        case PRODUCTS_ITEM_CLICK: { 
            return { 
                ...initialState, 
                isOpenEditForm: true 
            } 
        }

        case PRODUCTS_FORM_SAVE: { 
            const updatedData = action.updatedData
            const newState = {...initialState, isOpenEditForm: false} //_.cloneDeep 
 
            const foundData = newState.productsList.find((user) => user.date === updatedData.date) 
            if(foundData) { 
                foundData.status = updatedData.status 
                foundData.fullName = updatedData.fullName 

            } 
 
            return newState 
        }
        default: {
            return initialState
        }
    }
  

}