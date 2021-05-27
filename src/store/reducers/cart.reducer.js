import { actionTypes } from '../actions/cart.actions'

const initialState = {
    cart: {      
        uuid: undefined,
        custumer: '',
        amount: 0,
        createat: null,
        items: []           
    }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.INDEX:
            return { ...state, ...payload }

        case actionTypes.OPEN_SALE:
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
        
        case actionTypes.UPDATE_ITEM: 
            let index = state.cart.items.findIndex(item => item.product.id === payload.product.id);
            const amount = state.cart.amount - (state.cart.items[index].product.price * state.cart.items[index].quant);

            if (payload.quant > 0) {
                state.cart.items[index] = payload;
            } else {
                state.cart.items.splice(index, 1);
            }

            return {                
                cart: {
                    ...state.cart,
                    amount: amount + (payload.product.price * payload.quant),
                    items: state.cart.items
                }
            }

        case actionTypes.TIMEOUT:
            return { 
                cart: {      
                    uuid: undefined,
                    custumer: '',
                    amount: 0,
                    createat: '',
                    items: []           
                }                   
            }

        default:
            return state
    }
}
