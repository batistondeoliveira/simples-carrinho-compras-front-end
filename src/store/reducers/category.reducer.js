import { actionTypes } from '../actions/category.actions'

const initialState = {
    categories: []    
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.INDEX:
            return { ...state, ...payload }

        default:
            return state
    }
}
