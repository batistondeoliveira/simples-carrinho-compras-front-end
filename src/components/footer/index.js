import React from 'react'
import { useSelector } from 'react-redux'

export default function Footer() {    
    const categories = useSelector(state => state.categoryReducer.categories);    

    return (            
        <footer class="footer">
            <div class="footer-top">
                <div class="footer-top-about">
                <h3>Sobre Mim</h3>
                    <p>Programador FullStack com 17 anos de experiência no desenvolvimento de sistemas.</p>
                    <p><i class="fas fa-phone"></i> <a href="#">(35) 99915-6267</a></p>
                    <p><i class="fas fa-envelope"></i> <a href="#">batistondeoliveira@yahoo.com.br</a></p>
                </div>
                
                <div class="footer-top-categories">
                    <h3>Categorias</h3>
                    <ul>
                        {categories.map((item, index) => (
                            <li key={index}>
                                <a href="#">{item.name}</a>
                            </li>
                        ))}                                                               
                    </ul>
                </div>                    
            </div>
            
            <div class="footer-bottom">        
                <p>Copyright &copy; 2021 - Eliel Batiston</p>
            </div>
        </footer>  
    );
}
