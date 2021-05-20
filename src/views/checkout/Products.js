import React from 'react'

export default function ProductList() {
    return (            
        <div class="checkout-grid">
            <h2>Finalizar Pedido</h2>

            <div class="checkout-grid-custumer">
                <div class="custumer-grid-card">
                    <i class="fas fa-shopping-bag"></i>
                    <div class="custumer-detail">  
                        <p class="custumer-detail-name">Armazem do seu Zé</p>
                        <p class="custumer-detail-timeout">09:54:34 min restante</p>
                    </div>
                </div>
            </div>

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

            <div class="checkout-grid-button">                
                <div class="button-grid-card">
                    <button class="btn btn-checkout">
                        Finalizar compra
                    </button>
                </div>
            </div>
        </div>  
    );
}
