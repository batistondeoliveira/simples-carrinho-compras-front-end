import RequestService from './RequestService';

class CategoryService {               
    static async get() {                
        return RequestService.get('category');
    }              
}

export default CategoryService;
