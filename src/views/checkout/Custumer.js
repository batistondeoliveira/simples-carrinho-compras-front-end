import React from 'react'

export default function Custumer(props) {
    return (                    
        <div class="checkout-grid-custumer">
            <div class="custumer-grid-card">
                <i class="fas fa-shopping-bag"></i>
                <div class="custumer-detail">  
                    <p class="custumer-detail-name">{ props.cart.custumer }</p>
                    <p class="custumer-detail-timeout">09:54:34 min restante</p>
                </div>
            </div>
        </div>            
    );
}
