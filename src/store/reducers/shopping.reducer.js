import { actionTypes } from '../actions/shopping.actions'

const initialState = {
    shopping: {      
        uuid: undefined,
        custumer: '',
        amount: 0,
        items: []           
    }
}

export default (state = initialState, { type, payload, custumer }) => {
    switch (type) {
        case actionTypes.INDEX:
            return { ...state, ...payload }

        case actionTypes.OPEN:
            return { 
                shopping: {
                    ...state.shopping,
                    ...payload                   
                }                    
            }
            
        case actionTypes.ADD_ITEM:
            state.shopping.items.push(payload);

            return {
                shopping: {
                    ...state.shopping,
                    amount: state.shopping.amount + (payload.product.price * payload.quant),
                    items: state.shopping.items
                }
            }                   

        default:
            return state
    }
}
