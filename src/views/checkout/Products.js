import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateItemAction } from '../../store/actions/cart.actions';
import { currency } from '../components/currency';

export default function Products(props) {
    const dispatch = useDispatch();    
    const cart = useSelector(state => state.cartReducer.cart);        

    const updateItem = (product, quant) => {
        const index = cart.items.findIndex(item => item.product.id === product.id);        
        let item = {};                        

        item.quant = cart.items[index].quant + quant;         
        item.product = product
                    
        dispatch(updateItemAction(item));        
    }

    return (                    
        <div class="checkout-grid-products">            
            {props.cart.items.map((item, index) => (
                <div key={ index } class="checkout-grid-card">                                       
                    <div class="checkout-actions">  
                        <button class="btn" onClick={() => updateItem(item.product, -1)}>-</button>
                        <label class="product-amount">{item.quant}</label>                
                        <button class="btn" onClick={() => updateItem(item.product, 1)}>+</button>
                    </div>

                    <img src={ item.product.image } alt={ item.product.name } />  
                    
                    <p class="product-name">{ item.product.name }</p>
                    <p class="product-price">{ currency(item.quant * item.product.price) }</p>
                </div>                     
            ))}                                          
        </div>              
    );
}
