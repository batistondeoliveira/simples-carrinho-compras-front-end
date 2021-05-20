import React from 'react'

export default function Products() {
    return (                    
        <div class="checkout-grid-products">
            <div class="checkout-grid-card">                 
                <div class="checkout-actions">  
                    <button class="btn">-</button>
                    <label class="product-amount">1</label>                
                    <button class="btn">+</button>
                </div>

                <img src="img/coca-cola.png" alt="Produto 1" />  
                
                <p class="product-name">Nome do Produto</p>
                <p class="product-price">R$ 124,90</p>                                    
            </div> 
            
            <div class="checkout-grid-card">                 
                <div class="checkout-actions">  
                    <button class="btn">-</button>
                    <label class="product-amount">1</label>                
                    <button class="btn">+</button>
                </div>

                <img src="img/coca-cola.png" alt="Produto 2" />  

                <p class="product-name">Nome do Produto</p>
                <p class="product-price">R$ 124,90</p>                                    
            </div>
        </div>              
    );
}
