import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { indexAction } from '../../store/actions/products.actions';
import { currency } from '../../components/currency'
import { storeAction as shoppingStoreAction } from '../../store/actions/shopping.actions'
import { uuid } from 'uuidv4'

export default function Products() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productsReducer.products);
    const shopping = useSelector(state => state.shoppingReducer.shopping);

    const [ isLoadMore, setLoadMore ] = React.useState(false);
    const [ query, setQuery ] = React.useState({ 
        page: 1        
    }); 

    React.useEffect(() => {
        dispatch(indexAction(query, isLoadMore));    

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addItem = (product) => {        
        if (shopping.uuid === undefined) {
            shopping.uuid = uuid(); 
            shopping.custumer = 'Armazem do Zé';
        }        

        let item = {};

        item.quant = 1;
        item.products = product;
        shopping.items.push(item);
        shopping.amount += (item.quant * product);
        dispatch(shoppingStoreAction(shopping));
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
