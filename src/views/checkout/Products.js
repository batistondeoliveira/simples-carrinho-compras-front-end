import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateItemAction } from '../../store/actions/cart.actions';
import { currency } from '../components/currency';
import EmptyCartModal from './EmptyCartModal'

export default function Products(props) {
    const dispatch = useDispatch();    
    const cart = useSelector(state => state.cartReducer.cart);        
    const [ emptyCartModal, setEmptyCartModal ] = React.useState(false);

    const updateItem = (product, quant) => {
        const index = cart.items.findIndex(item => item.product.id === product.id);        
        let item = {};                        

        item.quant = cart.items[index].quant + quant;         
        item.product = product
                  
        if (item.quant === 0 && cart.items.length === 1) {
            setEmptyCartModal(true);
        }

        dispatch(updateItemAction(item));        
    }

    return (                    
        <div className="checkout-grid-products">    
            <EmptyCartModal 
                open={emptyCartModal}

                onSimClick={() => setEmptyCartModal(false)}
                onClose={() => setEmptyCartModal(false)}
            />

            {props.cart.items.map((item, index) => (
                <div key={ index } className="checkout-grid-card">                                       
                    <div className="checkout-actions">  
                        <button className="btn" onClick={() => updateItem(item.product, -1)}>-</button>
                        <label className="product-amount">{item.quant}</label>                
                        <button className="btn" onClick={() => updateItem(item.product, 1)}>+</button>
                    </div>

                    <img src={ item.product.image } alt={ item.product.name } />  
                    
                    <p className="product-name">{ item.product.name }</p>
                    <p className="product-price">{ currency(item.quant * item.product.price) }</p>
                </div>                     
            ))}    

            {props.cart.items.length > 0 &&
                <div className="checkout-grid-card">                                       
                    <p className="product-amount">Total</p>                    
                                        
                    <p className="product-price">{ currency(cart.amount) }</p>
                </div>             
            }                                    
        </div>              
    );
}
