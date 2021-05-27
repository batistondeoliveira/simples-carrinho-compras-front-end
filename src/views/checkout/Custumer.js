import React from 'react'

export default function Custumer(props) {
    return (                    
        <div className="checkout-grid-custumer">
            <div className="custumer-grid-card">
                <i className="fas fa-shopping-bag"></i>
                <div className="custumer-detail">  
                    <p className="custumer-detail-name">{ props.cart.custumer }</p>
                    <p className="custumer-detail-timeout">09:54:34 min restante</p>
                </div>
            </div>
        </div>            
    );
}
