import {config} from '../config';
import axios from 'axios';

class LikesService {
    constructor(){
        this.baseURL = config.backendUrl;
    }

    async getTweetLikes(tweetId){
        try {
            const response = await axios.get(`${this.baseURL}/likes/tweet-likes/${tweetId}`, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Getting Likes: ${error}`);
        }
    }

    async getCommentLikes(commentId){
        try {
            const response = await axios.get(`${this.baseURL}/likes/comment-likes/${commentId}`, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Getting Likes: ${error}`);
        }
    }

    async getVideoLikes(videoId){
        try {
            const response = await axios.get(`${this.baseURL}/likes/video-likes/${videoId}`, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Getting Likes: ${error}`);
        }
    }

    async toggleTweetLike(tweetId){
        try {
            const response = await axios.post(`${this.baseURL}/likes/toggle-tweet-like/${tweetId}`, {} , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Toggling Like: ${error}`);
        }
    }

    async toggleCommentLike(commentId){
        try {
            const response = await axios.post(`${this.baseURL}/likes/toggle-comment-like/${commentId}`, {} , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Toggling Like: ${error}`);
        }
    }

    async toggleVideoLike(videoId){
        try {
            const response = await axios.post(`${this.baseURL}/likes/toggle-video-like/${videoId}`, {} , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Toggling Like: ${error}`);
        }
    }
}

const likesService = new LikesService();
export default likesService;