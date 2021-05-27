import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
    return (
        <header className="header">            
            <div className="header-container">
                <Link to="/" id="brand">
                    <img src="img/logo.png" alt="4all logo" />
                </Link>                

                { props.children } 
            </div>            
        </header>
    );
}
