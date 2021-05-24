//import ShoppingService from '../../service/ShoppingService'

export const actionTypes = {
    INDEX: 'SHOPPING_INDEX',
    STORE: 'SHOPPING_STORE'    
}

//INDEX
export const indexResponse = (payload) => ({
    type: actionTypes.INDEX,
    payload    
})

//STORE
export const storeAction = (data) => dispatch => {
    dispatch(indexResponse(data))
}
