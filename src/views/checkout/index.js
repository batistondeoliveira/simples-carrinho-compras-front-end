import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../components/header'
import { Link } from 'react-router-dom'
import Custumer from './Custumer'
import Products from './Products'

export default function Checkout() {
    const cart = useSelector(state => state.cartReducer.cart);

    return (
        <>
            <Header />   

            <div class="checkout-grid">
                {cart.uuid === undefined &&
                    <>
                        <h2>seu carrinho está vazia</h2>

                        <div style={{marginTop: '1.5rem'}}>                
                            <div class="button-grid-card">
                                <Link class="btn btn-checkout" to="/">
                                    Voltar
                                </Link>                                
                            </div>
                        </div>
                    </>
                }

                {cart.uuid !== undefined &&
                    <>
                        <h2>Finalizar Pedido</h2>                

                        <Custumer cart={ cart } />

                        <Products cart={ cart } />

                        <div class="checkout-grid-button">                
                            <div class="button-grid-card">
                                <button class="btn btn-checkout">
                                    Finalizar compra
                                </button>
                            </div>
                        </div>
                    </>
                }
            </div>                          
        </>
    )
}
