import { actionTypes } from "../actions/products.actions"

const initialState = {
    products: {
        data: []
    }
}

export default (state = initialState, { type, payload, isLoadMore }) => {
    switch (type) {
        case actionTypes.INDEX:
            if (isLoadMore) {
                payload.products.data = state.products.data.concat(payload.products.data);
            }

            return { ...state, ...payload }

        default:
            return state
    }
}
