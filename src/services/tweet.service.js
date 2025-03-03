import {config} from '../config';
import axios from 'axios';

class TweetService {
    constructor(){
        this.baseURL = config.backendUrl;
    }

    async getTweets(userId){
        try {
            const response = await axios.get(`${this.baseURL}/tweets/${userId}`, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Getting Tweets: ${error}`);
        }
    }

    async createTweet(content){
        try {
            const response = await axios.post(`${this.baseURL}/tweets/new-tweet`, {
                content
            } , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Creating Tweet: ${error}`);
        }
    }

    async updateTweet(tweetId, content){
        try {
            const response = await axios.patch(`${this.baseURL}/tweets/${tweetId}`, {
                content
            } , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Updating Tweet: ${error}`);
        }
    }

    async deleteTweet(tweetId){
        try {
            const response = await axios.delete(`${this.baseURL}/tweets/${tweetId}`, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Deleting Tweet: ${error}`);
        }
    }
}

const tweetService = new TweetService();
export default tweetService;