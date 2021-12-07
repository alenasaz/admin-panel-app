import { PRODUCTS_STATUS_EDIT } from "../action_types";

export function productsStatusEditAction(status) {
    return {
        type:PRODUCTS_STATUS_EDIT,
        status
    }
}