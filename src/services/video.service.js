import {config} from '../config/config';
import axios from 'axios';

class Video {
    constructor(){
        this.baseURL = config.backendUrl;
    }

    async getUserVideos(userId){
        try {
            const response = await axios.get(`${this.baseURL}/videos?${userId}`, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Getting Videos: ${error}`);
        }
    }

    async getVideo(videoId){
        try {
            const response = await axios.get(`${this.baseURL}/videos/${videoId}`, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Getting Video: ${error}`);
        }
    }

    async publishVideo(description, title, videoFile, thumbnail){
        try {
            const response = await axios.post(`${this.baseURL}/videos/publish-video`, {
                description,
                title,
                videoFile,
                thumbnail
            } , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Publishing Video: ${error}`);
        }
    }

    async updateVideo(videoId, updatedVideoData){
        try {
            const response = await axios.patch(`${this.baseURL}/videos/${videoId}`, {
                updatedVideoData
            } , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Updating Video: ${error}`);
        }
    }

    async deleteVideo(videoId){
        try {
            const response = await axios.delete(`${this.baseURL}/videos/${videoId}`, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Deleting Video: ${error}`);
        }
    }

    async getAllVideos(){
        try {
            const response = await axios.get(`${this.baseURL}/videos`);
            return response.data;
        } catch (error) {
            console.log(`Error Getting All Videos: ${error}`);
        }   
    }
}

const videoService = new Video();
export default videoService;