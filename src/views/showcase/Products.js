import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { indexAction as indexProductAction } from '../../store/actions/products.actions';
import { currency } from '../components/currency'
import { addItemAction } from '../../store/actions/cart.actions'
import CustumerModal from '../showcase/CustumerModal'

export default function Products() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productsReducer.products);
    const cart = useSelector(state => state.cartReducer.cart);

    const [ custumerModal, setCustumerModal ] = React.useState(false);
    const [ productChosen, setProductChosen ] = React.useState({});
    const [ isLoadMore, setLoadMore ] = React.useState(false);
    const [ query, setQuery ] = React.useState({ 
        page: 1        
    }); 

    React.useEffect(() => {
        dispatch(indexProductAction(query, isLoadMore));        

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const registerItem = (product) => {
        let item = {};

        item.quant = 1;
        item.product = product;                
        
        dispatch(addItemAction(item));  
        
        setProductChosen({});
        setCustumerModal(false);
    }

    const addItem = (product) => {        
        if (cart.uuid === undefined) {            
            setProductChosen(product);
            setCustumerModal(true);
            
            return ;
        }        

        registerItem(product)
    }

    return (    
        <div class="products-grid">
            <CustumerModal 
                open={custumerModal}                 
                onRegisterItem={() => registerItem(productChosen)}
                onClose={() => {
                    setCustumerModal(false);
                    setProductChosen({});
                }}
            />
        
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
