export const actionTypes = {
    OPEN: 'CART_OPEN',
    ADD_ITEM: 'CART_ADD_ITEM',
    CHANGE_CUSTUMER: 'CART_CHANGE_CUSTUMER'    
}

//OPEN
export const openResponse = (payload) => ({
    type: actionTypes.OPEN,
    payload    
})

export const openSaleAction = (uuid, custumer) => dispatch => {
    dispatch(openResponse(
        {"uuid": uuid, "custumer": custumer}
    ))
}

//ITEM STORE
export const addItemResponse = (payload) => ({
    type: actionTypes.ADD_ITEM,
    payload
})

export const addItemAction = (item) => dispatch => {
    dispatch(addItemResponse(item))
}

//CHANGE CUSTUMER
export const changeCustumer = (payload) => ({
    type: actionTypes.CHANGE_CUSTUMER,
    payload    
})
