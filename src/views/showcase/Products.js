import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { indexAction } from '../../store/actions/products.actions';
import { currency } from '../../components/currency'

export default function Products() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productsReducer.products);

    const [ isLoadMore, setLoadMore ] = React.useState(false);
    const [ query, setQuery ] = React.useState({ 
        page: 1        
    }); 

    React.useEffect(() => {
        dispatch(indexAction(query, isLoadMore));    

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (    
        <div class="products-grid">
            <h2>Produtos</h2>
            <div class="products-grid-container">
                {products.data.map((item, index) => (
                    <div key={index} class="products-grid-card">        
                        <img src="img/coca-cola.png" alt="Produto 1" />
                        <p class="category">Categoria</p>
                        <h3 class="product-name">{item.name}</h3>
                        <p class="product-price">{currency(item.price)}</p> 
                        <button class="btn">Adicionar ao Carrinho</button>
                    </div>  
                ))}                                                                            
            </div>
        </div>  
    );
}
