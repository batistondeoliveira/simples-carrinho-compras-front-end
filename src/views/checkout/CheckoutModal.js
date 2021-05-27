import React from 'react'
import { Modal, Header, Body, Footer } from '../components/modal'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkoutAction } from '../../store/actions/cart.actions'

export default function CheckoutModal(props) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer.cart);

    return (
        <Modal open={ props.open }>            
            <Body>   
                <div className="checkout">
                    <i className="fas fa-check-circle"></i>
                    <p>Pedido finalizado com sucesso!</p>               
                </div>             
            </Body>

            <Footer>
                <Link 
                    className="btn" 
                    onClick={() => {
                        dispatch(checkoutAction(cart));
                        props.onClose();
                    }}
                    to="/"
                >
                    Fechar
                </Link>                
            </Footer>
        </Modal>
    )
}