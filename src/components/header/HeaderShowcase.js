import React from 'react'
import Header from './Header'

export default function HeaderShowcase() {
    return (
        <Header>
            <form action="" id="search-form">
                <select id="search" placeholder="Busque aqui">
                    <option value="">
                        Busque por categoria
                    </option>

                    <option value="Produto 1">
                        Produto 1
                    </option>
                </select>                
            </form>

            <div class="header-actions-menu">          
                <div class="header-cart-container">
                    <span class="badge-shopping">
                        0
                    </span>

                    <i class="fas fa-shopping-cart"></i>
                    
                    <a href="#">Carrinho</a>
                </div>
            </div>
        </Header>
    );
}
