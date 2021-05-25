import React from 'react'
import { currency } from '../components/currency';

export default function Products(props) {
    return (                    
        <div class="checkout-grid-products">
            {props.shopping.items.map((items, index) => (
                <div key={ index } class="checkout-grid-card">                                       
                    <div class="checkout-actions">  
                        <button class="btn">-</button>
                        <label class="product-amount">1</label>                
                        <button class="btn">+</button>
                    </div>

                    <img src={ items.product.image } alt={ items.product.name } />  
                    
                    <p class="product-name">{ items.product.name }</p>
                    <p class="product-price">{ currency(items.quant * items.product.price) }</p>
                </div>                     
            ))}                                          
        </div>              
    );
}
