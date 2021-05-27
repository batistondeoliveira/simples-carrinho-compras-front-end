import React from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Header, Body, Footer } from '../components/modal'
import { uuid as uuidv4 } from 'uuidv4'
import { openSaleAction, timeOutAction } from '../../store/actions/cart.actions'
import Input from '../components/input/Input'
import { cartOpenTimeOut } from '../../config/'

export default function CustumerModal(props) {
    const dispatch = useDispatch()    
    const [ msgError, setMsgError ] = React.useState('');
    const [ custumer, setCustumer ] = React.useState('');

    const timeOut = () => {
        dispatch(timeOutAction());
    }

    const addItem = () => {
        if (!custumer) {
            setMsgError('Informe seu nome para continuar a comprar :)')

            return ;
        }                    

        dispatch(openSaleAction(uuidv4(), custumer)); 
        setTimeout(timeOut, cartOpenTimeOut);

        props.onRegisterItem();                   
    }

    return (
        <Modal open={ props.open }>
            <Header 
                title="Identifação do cliente" 
                close 
                onClose={() => props.onClose()} 
            />        

            <Body>
                <Input
                    type="text"
                    name="custumer"
                    id="custumer"
                    value={custumer}
                    error={msgError}
                    onChange={(input) => {
                        setCustumer(input.target.value);

                        if (msgError) {
                            setMsgError('')
                        }
                    }}
                >
                    Informe o seu nome
                </Input>                
            </Body>

            <Footer>
                <button className="btn" onClick={() => addItem()}>Salvar</button>
                <button className="btn btn-light" onClick={() => props.onClose()}>Fechar</button>
            </Footer>
        </Modal>
    )
}