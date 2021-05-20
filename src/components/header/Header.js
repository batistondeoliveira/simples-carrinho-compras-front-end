import React from 'react'

export default function Header(props) {
    return (
        <header class="header">            
            <div class="header-container">
                <a href="#" id="brand">
                    <img src="img/logo.png" alt="4all logo" />
                </a>

                { props.children } 
            </div>            
        </header>
    );
}
