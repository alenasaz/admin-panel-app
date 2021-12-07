import { PRODUCTS_ITEM_CLICK } from "../action_types";
export function prooductsItemClickAction (fullName, status, date) 
{
    return {
        type:PRODUCTS_ITEM_CLICK,
        fullName,
        status,
        date,
    }
}