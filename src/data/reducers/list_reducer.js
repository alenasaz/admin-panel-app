import productsList from '../list.json'

const initState = {
    productsList:productsList,
}

export function productListReducer(initialState=initState, action)
{
    return initialState
}