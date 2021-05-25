import { combineReducers } from 'redux'
import categoryReducer from './category.reducer'
import productsReducer from './products.reducer'
import cartReducer from './cart.reducer'

const rootReducer = combineReducers({
    categoryReducer,
    productsReducer,
    cartReducer
})

export default rootReducer;
