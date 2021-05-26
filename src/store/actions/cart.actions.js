export const actionTypes = {
    OPEN: 'CART_OPEN',
    ADD_ITEM: 'CART_ADD_ITEM',
    UPDATE_ITEM: 'CART_UPDATE_ITEM'       
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

//UPDATE ITEM
export const updateItemResponse = (payload) => ({
    type: actionTypes.UPDATE_ITEM,
    payload
})

export const updateItemAction = (item) => dispatch => {
    dispatch(updateItemResponse(item))
}
