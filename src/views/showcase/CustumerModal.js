import { useDispatch, useSelector } from 'react-redux'
import { Modal, Header, Body, Footer } from '../components/modal'
import { changeCustumer } from '../../store/actions/cart.actions'

export default function CustumerModal(props) {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartReducer.cart);

    return (
        <Modal open={ props.open }>
            <Header 
                title="Identifação do cliente" 
                close 
                onClose={() => props.onClose()} 
            />        

            <Body>
                <label>Informe o seu nome</label>
                <input type="text" value={cart.custumer} onChange={(input) => dispatch(changeCustumer(input.target.value))} />
            </Body>

            <Footer>
                <button class="btn" onClick={() => props.onClick()}>Salvar</button>
                <button class="btn btn-light" onClick={() => props.onClose()}>Fechar</button>
            </Footer>
        </Modal>
    )
}