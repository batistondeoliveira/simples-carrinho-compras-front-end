import React from 'react'
import { MillisToMinutesAndSeconds } from '../components/time'
import { cartOpenTimeOut } from '../../config'

export default function Custumer(props) { 
    const [ timeOut, setTimeOut ] = React.useState('');

    const remainingTime = () => {        
        const now = Date.parse(new Date());        
        const remainig = now - props.cart.createat;              

        setTimeOut(MillisToMinutesAndSeconds(cartOpenTimeOut - remainig));        
    }

    React.useEffect(() => {
        setInterval(remainingTime, 1000);

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);    

    return (                    
        <div className="checkout-grid-custumer">            
            <div className="custumer-grid-card">
                <i className="fas fa-shopping-bag"></i>
                <div className="custumer-detail">  
                    <p className="custumer-detail-name">{ props.cart.custumer }</p>

                    { timeOut && <p className="custumer-detail-timeout">{ timeOut } min restante</p> }                    
                </div>
            </div>
        </div>            
    );
}
