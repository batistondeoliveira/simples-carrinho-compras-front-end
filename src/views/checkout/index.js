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

            <div className="checkout-grid">
                {cart.items.length === 0 &&
                    <>
                        <h2>seu carrinho está vazia</h2>

                        <div style={{marginTop: '1.5rem'}}>                
                            <div className="button-grid-card">
                                <Link className="btn btn-checkout" to="/">
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

                        <div className="checkout-grid-button">                
                            <div className="button-grid-card">
                                <button className="btn btn-checkout" onClick={() => setCheckoutModal(true)}>
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
