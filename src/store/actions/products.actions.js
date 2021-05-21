import ProductsService from '../../service/ProductsService'

export const actionTypes = {
    INDEX: 'PRODUCTS_INDEX'    
}

export const actionName = (payload) => ({
    type: actionTypes.INDEX,
    payload
})

//INDEX
export const indexResponse = (payload, isLoadMore) => ({
    type: actionTypes.INDEX,
    payload,
    isLoadMore
})

export const indexAction = (query, isLoadMore) => dispatch => {
    return ProductsService.get('?' + new URLSearchParams(query))
        .then(response => typeof response !== 'undefined' && dispatch(indexResponse(response.data, isLoadMore)))
}
