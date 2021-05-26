import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../components/header'
import { Link } from 'react-router-dom'
import Custumer from './Custumer'
import Products from './Products'
import CheckoutModal from './CheckoutModal'

export default function Checkout() {
    const cart = useSelector(state => state.cartReducer.cart);
    const [ checkoutModal, setCheckoutModal ] = React.useState(false);

    return (
        <>
            <CheckoutModal open={checkoutModal} onClose={() => setCheckoutModal(false)} />

            <Header />   

            <div class="checkout-grid">
                {cart.items.length === 0 &&
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

                {cart.items.length > 0 &&
                    <>
                        <h2>Finalizar Pedido</h2>                

                        <Custumer cart={ cart } />

                        <Products cart={ cart } />

                        <div class="checkout-grid-button">                
                            <div class="button-grid-card">
                                <button class="btn btn-checkout" onClick={() => setCheckoutModal(true)}>
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
