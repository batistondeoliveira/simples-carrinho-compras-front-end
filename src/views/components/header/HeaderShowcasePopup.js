import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { currency } from '../currency'

export default function HeaderShowcasePopup() {
    const cart = useSelector(state => state.cartReducer.cart)

    return (                    
        <div className="shopping arrow-top-right popup">   
            {cart.items.length === 0 &&
                <span className="shopping-empty">seu carrinho está vazio</span>
            }

            {cart.items.length > 0 &&
                <>                              
                    <span className="shopping-popup-title">Meu carrinho</span>                    

                    <ul className="shopping-list">                        
                        {cart.items.map((item, index) => (
                            <li key={index} className="shopping-item">                            
                                <img src={item.product.image} className="image" alt={item.product.name} />
                                <span className="product-name">{item.product.name}</span>                                
                                <span className="product-quant">Quantidade: {item.quant}</span>
                                <span className="product-price">{currency(item.product.price * item.quant)}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="shopping-bottom">
                        <span className="total">
                            Total: <strong>{ currency(cart.amount) }</strong>
                        </span>
                        
                        <Link className="btn" to="/checkout">
                            ver meu carrinho
                        </Link>
                    </div> 
                </>
            }                       
        </div>             
    );
}
