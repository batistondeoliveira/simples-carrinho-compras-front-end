import CategoryService from '../../service/CategoryService'

export const actionTypes = {
    INDEX: 'CATEGORY_INDEX'    
}

//INDEX
export const indexResponse = (payload) => ({
    type: actionTypes.INDEX,
    payload
})

export const indexAction = () => dispatch => {
    return CategoryService.get()
        .then(response => typeof response !== 'undefined' && dispatch(indexResponse(response.data)))
}
