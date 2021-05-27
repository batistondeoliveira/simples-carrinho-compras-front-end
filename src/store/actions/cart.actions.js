export const actionTypes = {
    INDEX: 'CART_INDEX',
    OPEN_SALE: 'CART_OPEN_SALE',
    ADD_ITEM: 'CART_ADD_ITEM',
    UPDATE_ITEM: 'CART_UPDATE_ITEM',
    CHECKOUT: 'CART_CHECKOUT',
    TIMEOUT: 'CART_TIMEOUT'
}

//INDEX
export const indexResponse = (payload) => ({
    type: actionTypes.INDEX,
    payload    
})

//OPEN
export const openSaleResponse = (payload) => ({
    type: actionTypes.OPEN_SALE,
    payload    
})

export const openSaleAction = (uuid, custumer) => dispatch => {    
    dispatch(openSaleResponse(
        {"uuid": uuid, "custumer": custumer, "createat": Date.parse(new Date())}
    ));    
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

//CHECKOUT
export const checkoutAction = (cart) => dispatch => {
    cart.uuid = undefined;
    cart.custumer = '';
    cart.amount = '';
    cart.items = []; 

    dispatch(indexResponse(cart));
    clearTimeout();
}

//TIMEOUT
export const timeOutResponse = (payload) => ({
    type: actionTypes.TIMEOUT,
    payload
})

export const timeOutAction = () => dispatch => {    
    dispatch(timeOutResponse({}));
}
