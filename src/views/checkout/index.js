import React from 'react'
import { Header } from '../components/header'
import Custumer from './Custumer'
import Products from './Products'

export default function Checkout() {
    return (
        <>
            <Header />   

            <div class="checkout-grid">
                <h2>Finalizar Pedido</h2>

                <Custumer />

                <Products />

                <div class="checkout-grid-button">                
                    <div class="button-grid-card">
                        <button class="btn btn-checkout">
                            Finalizar compra
                        </button>
                    </div>
                </div>
            </div>                          
        </>
    )
}
