import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { currency } from '../currency'

export default function HeaderShowcasePopup() {
    const cart = useSelector(state => state.cartReducer.cart)

    return (                    
        <div class="shopping arrow-top-right popup">   
            {cart.items.length === 0 &&
                <span class="shopping-empty">seu carrinho está vazio</span>
            }

            {cart.items.length > 0 &&
                <>                              
                    <span class="shopping-popup-title">Meu carrinho</span>                    

                    <ul class="shopping-list">                        
                        {cart.items.map((item, index) => (
                            <li key={index} class="shopping-item">                            
                                <img src={item.product.image} class="image" alt={item.product.name} />
                                <span class="product-name">{item.product.name}</span>                                
                                <span class="product-quant">Quantidade: {item.quant}</span>
                                <span class="product-price">{currency(item.product.price * item.quant)}</span>
                            </li>
                        ))}
                    </ul>

                    <div class="shopping-bottom">
                        <span class="total">
                            Total: <strong>{ currency(cart.amount) }</strong>
                        </span>
                        
                        <Link class="btn" to="/checkout">
                            ver meu carrinho
                        </Link>
                    </div> 
                </>
            }                       
        </div>             
    );
}
