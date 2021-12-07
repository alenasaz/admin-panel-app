import { PRODUCTS_FORM_SAVE } from "../action_types";

export function productsFormSaveAction(updatedData) {
    return {
        type:PRODUCTS_FORM_SAVE,
        updatedData,
    }
}