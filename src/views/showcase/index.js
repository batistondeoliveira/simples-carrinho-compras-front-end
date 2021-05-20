import React from 'react'
import { HeaderShowcase } from '../../components/header'
import Products from '../../components/products'
import Footer from '../../components/footer'

export default function Showcase() {
    return (
        <>
            <HeaderShowcase />   

            <Products /> 

            <Footer />            
        </>
    )
}
