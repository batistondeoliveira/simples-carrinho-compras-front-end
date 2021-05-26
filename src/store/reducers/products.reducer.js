import { actionTypes } from "../actions/products.actions"

const initialState = {
    products: {
        data: []
    },
    _searchData: {

    }
}

export default (state = initialState, { type, payload, isLoadMore }) => {
    switch (type) {
        case actionTypes.INDEX:
            if (isLoadMore) {
                payload.products.data = state.products.data.concat(payload.products.data);
            }

            state._searchData = payload.products;

            return { 
                ...state, 
                ...payload
            }

        case actionTypes.FILTER_CATEGORY:
            let filter = state.products = state._searchData;

            if (parseInt(payload) > -1) {
                filter = state.products.data.filter(function(product) {
                    return parseInt(product.idCategory) === parseInt(payload);
                });

                return {
                    ...state,                
                    products: {
                        ...state.products,
                        data: filter
                    }
                }    
            }

            return {
                ...state                
            }

        default:
            return state
    }
}
