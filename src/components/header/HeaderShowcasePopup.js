import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { currency } from '../currency'

export default function HeaderShowcasePopup() {
    const shopping = useSelector(state => state.shoppingReducer.shopping)

    return (                    
        <div class="shopping arrow-top-right popup">   
            {shopping.uuid === undefined &&
                <span class="shopping-empty">sua cesta está vazia</span>
            }

            {
                <>                              
                    <span class="shopping-popup-title">Minha cesta</span>

                    <ul class="shopping-list">
                        {shopping.items.map((items, index) => {
                            <li class="shopping-item">                            
                                <img src={items.image} class="image" alt={items.name} />
                                <span class="product-name">{items.name}</span>                                
                                <span class="product-quant">Quantidade: {items.quant}</span>
                                <span class="product-price">{currency(items.price * items.quant)}</span>
                            </li>
                        })}                        
                    </ul>

                    <div class="shopping-bottom">
                        <span class="total">
                            Total: <strong>{ currency(shopping.amount) }</strong>
                        </span>
                        
                        <Link class="btn" to="/checkout">
                            ver minha cesta
                        </Link>
                    </div> 
                </>
            }                       
        </div>             
    );
}
