import React from 'react'
import { Modal, Header, Body, Footer } from '../components/modal'
import { Link } from 'react-router-dom'

export default function EmptyCartModal(props) {
    return (
        <Modal open={ props.open }>
            <Header 
                title="Seu carrinho está vazio" 
                close 
                onClose={() => props.onClose()} 
            />        

            <Body>
                <p>Atenção</p>               
                <p>Seu carrinho está vazio, deseja voltar para a vitrine de produtos?</p>               
            </Body>

            <Footer>
                <Link class="btn" onClick={() => props.onSimClick()} to="/">
                    Sim
                </Link>

                <button class="btn btn-light" onClick={() => props.onClose()}>Não</button>
            </Footer>
        </Modal>
    )
}