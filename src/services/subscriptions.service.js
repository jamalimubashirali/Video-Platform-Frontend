import axios from "axios";
import {config} from "../config/config"

class Subscription {
    constructor () {
        this.baseURL = config.backendUrl;
    }

    async getSubscribers (channelId) {
        try {
            const response = await axios.get(`${this.baseURL}/subscribers/subscribers/${channelId}` , {
                withCredentials : true
            });
            return response.data;
        } catch (error) {
            console.log(`Error fetching Subscribers : ${error.message}`);
        }
    }

    async getUserSubscriberedChannels (subscriberId) {
        try {
            const response = await axios.get(`${this.baseURL}/subscribers/subscribed-channels/${subscriberId}`,
                {
                    withCredentials : true
                }
            );
            return response.data;
        } catch (error) {
            console.log(`Error fetching subscribed Channels : ${error.message}`);
        }
    }

    async addOrRemoveSubscription (channelId) {
        try {
            const response = await axios.post(`${this.baseURL}/subscribers/toggle-subscription/${channelId}`,
                {
                    withCredentials : true
                }
            );
            return response.data;
        } catch (error) {
            console.log(`Error occured during the toggle subscription request : ${error.message}`);
        }
    }
}

const subscriptionService = Subscription();

export default subscriptionService;