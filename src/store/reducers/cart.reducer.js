import { actionTypes } from '../actions/cart.actions'

const initialState = {
    cart: {      
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
                cart: {
                    ...state.cart,
                    ...payload                   
                }                    
            }
            
        case actionTypes.ADD_ITEM:
            state.cart.items.push(payload);

            return {
                cart: {
                    ...state.cart,
                    amount: state.cart.amount + (payload.product.price * payload.quant),
                    items: state.cart.items
                }
            }                   

        case actionTypes.CHANGE_CUSTUMER:
            return {
                cart: {
                    ...state.cart,
                    custumer: payload                    
                }
            }

        default:
            return state
    }
}
