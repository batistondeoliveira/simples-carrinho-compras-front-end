import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { indexAction as indexProductAction } from '../../store/actions/products.actions';
import { currency } from '../components/currency'
import {     
    openSaleAction,
    addItemAction
} from '../../store/actions/shopping.actions'
import { uuid as uuidv4 } from 'uuidv4'

export default function Products() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productsReducer.products);
    const shopping = useSelector(state => state.shoppingReducer.shopping);

    const [ isLoadMore, setLoadMore ] = React.useState(false);
    const [ query, setQuery ] = React.useState({ 
        page: 1        
    }); 

    React.useEffect(() => {
        dispatch(indexProductAction(query, isLoadMore));        

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const addItem = (product) => {        
        if (shopping.uuid === undefined) {
            const name = prompt('Informe o seu nome');                    

            dispatch(openSaleAction(uuidv4(), name));
        }        

        let item = {};

        item.quant = 1;
        item.product = product;                
        
        dispatch(addItemAction(item));
    }

    return (    
        <div class="products-grid">
            <h2>Produtos</h2>
            <div class="products-grid-container">
                {products.data.map((product, index) => (
                    <div key={index} class="products-grid-card">        
                        <img src={product.image} alt={product.name} />
                        <p class="category">Categoria</p>
                        <h3 class="product-name">{product.name}</h3>
                        <p class="product-price">{currency(product.price)}</p> 
                        <button class="btn" onClick={() => addItem(product)}>Adicionar ao Carrinho</button>
                    </div>  
                ))}                                                                            
            </div>                    
        </div>          
    );
}
