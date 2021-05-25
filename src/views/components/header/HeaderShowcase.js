import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import HeaderShowcasePopup from './HeaderShowcasePopup'
import { indexAction } from '../../../store/actions/category.actions';
import { useDispatch, useSelector } from 'react-redux'

export default function HeaderShowcase() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoryReducer.categories);    
    const shopping = useSelector(state => state.shoppingReducer.shopping);    

    const getProductsByCategory = (id) => {
        alert(id);
    }

    React.useEffect(() => {
        dispatch(indexAction());    

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <Header>
            <form action="" id="search-form">
                <select id="search" placeholder="Busque aqui" onChange={(event) => getProductsByCategory(event.target.value)}>
                    <option value="-1">
                        Busque por categoria
                    </option>
                    
                    {categories.map((item, index) => (
                        <option key={index} value={item.id}>
                            {item.name}
                        </option>
                    ))}                                      
                </select>                
            </form>

            <div class="header-actions-menu">          
                <div class="header-cart-container">
                    <span class="badge-shopping">
                        { shopping.items.length }
                    </span>

                    <i class="fas fa-shopping-cart"></i>
                    
                    <Link to="/checkout">
                        Carrinho
                    </Link>

                    <HeaderShowcasePopup />
                </div>
            </div>
        </Header>
    );
}
