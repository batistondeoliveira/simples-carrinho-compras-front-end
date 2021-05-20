import React from 'react'

export default function Products() {
    return (    
        <div class="products-grid">
            <h2>Produtos</h2>
            <div class="products-grid-container">
                <div class="products-grid-card">        
                    <img src="img/coca-cola.png" alt="Produto 1" />
                    <p class="category">Categoria</p>
                    <h3 class="product-name">Nome do Produto</h3>
                    <p class="product-price">R$ 124,90</p>                    
                    <button class="btn">Adicionar ao Carrinho</button>
                </div>  
                
                <div class="products-grid-card">        
                    <img src="img/fanta-lata.png" alt="Produto 2" />
                    <p class="category">Categoria</p>
                    <h3 class="product-name">Nome do Produto</h3>
                    <p class="product-price">R$ 124,90</p>                    
                    <button class="btn">Adicionar ao Carrinho</button>
                </div>   

                <div class="products-grid-card">        
                    <img src="img/brigadeiro.png" alt="Produto 3" />
                    <p class="category">Categoria</p>
                    <h3 class="product-name">Nome do Produto</h3>
                    <p class="product-price">R$ 124,90</p>                    
                    <button class="btn">Adicionar ao Carrinho</button>
                </div>   

                <div class="products-grid-card">        
                    <img src="img/agua-mineral-sem-gas.png" alt="Produto 4" />
                    <p class="category">Categoria</p>
                    <h3 class="product-name">Nome do Produto</h3>
                    <p class="product-price">R$ 124,90</p>                    
                    <button class="btn">Adicionar ao Carrinho</button>
                </div>   
            </div>
        </div>  
    );
}
