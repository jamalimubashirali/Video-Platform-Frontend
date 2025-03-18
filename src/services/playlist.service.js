import {config} from '../config/config';
import axios from 'axios';

class PlaylistService {
    constructor(){
        this.baseURL = config.backendUrl;
    }

    async getPlaylist(playlistId){
        try {
            const response = await axios.get(`${this.baseURL}/playlists/${playlistId}`, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Getting Playlist: ${error}`);
        }
    }

    async getUserPlaylists(userId){
        try {
            const response = await axios.get(`${this.baseURL}/playlists/user-playlist/${userId}`, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Getting Playlists: ${error}`);
        }
    }

    async createPlaylist(name, description){
        try {
            const response = await axios.post(`${this.baseURL}/playlists/new-playlist`, {
                name,
                description
            } , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Creating Playlist: ${error}`);
        }
    }

    async updatePlaylist(playlistId, updateData){
        try {
            const response = await axios.patch(`${this.baseURL}/playlists/${playlistId}`, updateData , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Updating Playlist: ${error}`);
        }
    }

    async deletePlaylist(playlistId){ 
        try {
            const response = await axios.delete(`${this.baseURL}/playlists/${playlistId}`, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Deleting Playlist: ${error}`);
        }
    }

    async addVideoToPlaylist(playlistId, videoId){
        try {
            const response = await axios.patch(`${this.baseURL}/playlists/add-video/${playlistId}/${videoId}`, {} , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Adding Video to Playlist: ${error}`);
        }
    }

    async removeVideoFromPlaylist(playlistId, videoId){
        try {
            const response = await axios.patch(`${this.baseURL}/playlists/remove-video/${playlistId}/${videoId}`, {} , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Removing Video from Playlist: ${error}`);
        }
    }
}

const playlistService = new PlaylistService();
export default playlistService;