import { PRODUCTS_NAME_EDIT } from "../action_types";

export function productsNameEditAction(fullName) {
    return {
        type:PRODUCTS_NAME_EDIT,
        fullName
    }
}