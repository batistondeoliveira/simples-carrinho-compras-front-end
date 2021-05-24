import { combineReducers } from 'redux'
import categoryReducer from './category.reducer'
import productsReducer from './products.reducer'
import shoppingReducer from './shopping.reducer'

const rootReducer = combineReducers({
    categoryReducer,
    productsReducer,
    shoppingReducer
})

export default rootReducer;
