import {config} from '../config/config';
import axios from 'axios';

class Authentication {
    constructor(){
        this.baseURL = config.backendUrl;
    }

    async register(email, password, fullname , username , avatar , converImage){
        try {
            const response = await axios.post(`${this.baseURL}/users/register`, {
                email,
                password,
                fullname,
                username,
                avatar,
                converImage
            } , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Creating User: ${error}`);
        }
    }

    async login(email, password){
        try {
            const response = await axios.post(`${this.baseURL}/users/login`, {
                email,
                password
            } , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async logout(){
        try {
            const response = await axios.post(`${this.baseURL}/users/logout` , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

const authService = new Authentication();

export default authService;