import RequestService from './RequestService';

class ProductsService {               
    static async get(query) {                
        return RequestService.get('products' + query);
    }              
}

export default ProductsService;
