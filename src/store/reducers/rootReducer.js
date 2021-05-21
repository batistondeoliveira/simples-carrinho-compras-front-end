import { combineReducers } from 'redux'
import categoryReducer from './category.reducer'
import productsReducer from './products.reducer'

const rootReducer = combineReducers({
    categoryReducer,
    productsReducer
})

export default rootReducer;
