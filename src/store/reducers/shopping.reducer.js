import { actionTypes } from '../actions/shopping.actions'

const initialState = {
    shopping: {
        uuid: undefined,
        custumer: '',        
        items: [],
        amount: 0
    }    
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.INDEX:
            return { ...state, ...payload }

        case actionTypes.STORE:                         
            return {
                ...state,
                shopping: {
                    ...state,
                    items: [
                        ...[payload],
                        ...state.shopping.items
                    ]
                }
            }           

        default:
            return state
    }
}
