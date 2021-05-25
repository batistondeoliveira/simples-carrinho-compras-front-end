import axios from 'axios';

class RequestService {
    static urlBase() {
        return 'https://60aaf6e466f1d000177734b2.mockapi.io/api/v1/';
    }

    static headers(config) {
        if(config === undefined) 
            config = {headers: {}};        

        if(config.headers === undefined) {
            config.headers = {};
        }            

        return config;
    }    

    static async get(url, config) {
        return axios.get(RequestService.urlBase() + url, RequestService.headers(config));
    }

    static async patch(url, data, config) {
        return axios.patch(RequestService.urlBase() + url, data, RequestService.headers(config));
    }

    static async post(url, data, config) {
        return axios.post(RequestService.urlBase() + url, data, RequestService.headers(config));
    }

    static async delete(url, config) {
        return axios.delete(RequestService.urlBase() + url, RequestService.headers(config));
    }
}

export default RequestService;
