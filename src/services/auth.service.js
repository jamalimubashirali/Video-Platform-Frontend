import { config } from "../config/config";
import axios from "axios";

class Authentication {
    constructor() {
        this.baseURL = config.backendUrl;
    }

    async register(email, password, fullname, username, avatar, coverImage) {
        
        try {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);
            formData.append("fullname", fullname);
            formData.append("username", username);
            if (avatar) formData.append("avatar", avatar[0]); 
            if (coverImage) formData.append("coverImage", coverImage[0]); 
            const response = await axios.post(`${this.baseURL}/users/register`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            return response.data;
        } catch (error) {
            console.log(`Error Creating User: ${error}`);
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseURL}/users/login`, {
                email,
                password
            }, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            const response = await axios.post(`${this.baseURL}/users/logout`, {}, {
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
