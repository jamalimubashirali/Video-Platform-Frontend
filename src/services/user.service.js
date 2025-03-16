import {config} from '../config';
import axios from 'axios';

class User {
    constructor(){
        this.baseURL = config.backendUrl;
    }

    async changePassword(oldPassword, newPassword){
        try {
            await axios.post(`${this.baseURL}/users/change-password`, {
                oldPassword,
                newPassword
            } , {
                withCredentials: true
            });
        } catch (error) {
            console.log(`Error Changing Password: ${error}`);
        }
    }

    async getCurrentUser(){
        try {
            const response = await axios.get(`${this.baseURL}/users/current-user`, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Getting Current User: ${error}`);
        }
    }

    async updateDetails(updateData){
        try {
            const response = await axios.patch(`${this.baseURL}/users/edit-user`, {
                updateData
            } , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Updating User Details: ${error}`);
        }
    }

    async updateAvatar(avatar){
        try {
            const response = await axios.patch(`${this.baseURL}/users/avatar`, {
                avatar
            } , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Updating Avatar: ${error}`);
        }
    }

    async updateCoverImage(coverImage){
        try {
            const response = await axios.patch(`${this.baseURL}/users/cover-image`, {
                coverImage
            } , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Updating Cover Image: ${error}`);
        }
    }

    async getUserChannelProfile(username){
        try {
            const response = await axios.get(`${this.baseURL}/users/${username}`, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Getting User Channel Profile: ${error}`);
        }
    }


    async getWatchHistory(){
        try {
            const response = await axios.get(`${this.baseURL}/users/watch-history`, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Getting Watch History: ${error}`);
        }
    }
}

const userService = new User();

export default userService;