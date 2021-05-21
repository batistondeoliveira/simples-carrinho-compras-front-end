import React from 'react'

export default function HeaderShowcasePopup() {
    return (                    
        <div class="shopping arrow-top-right popup">                                                 
            <span class="shopping-popup-title">minha cesta</span>

            <ul class="shopping-list">
                <li class="shopping-item">                            
                    <img src="img/coca-cola.png" class="image" alt="Produto 1" />
                    <span class="product-name">Produto 1 XXXX  XXXXXXXXA</span>                                
                    <span class="product-quant">Quantidade: 1</span>
                    <span class="product-price">R$ 1.299,00</span>                            
                </li>

                <li class="shopping-item">                            
                    <img src="img/coca-cola.png" class="image" alt="Produto 1" />
                    <span class="product-name">Produto 1 XXXX  XXXXXXXXA</span>                                
                    <span class="product-quant">Quantidade: 1</span>
                    <span class="product-price">R$ 1.299,00</span>                            
                </li>
            </ul>

            <div class="shopping-bottom">
                <span class="total">
                    Total: <strong>R$ 1.299,00</strong>
                </span>
                
                <button class="btn">ver minha cesta</button>
            </div>                        
        </div>             
    );
}
