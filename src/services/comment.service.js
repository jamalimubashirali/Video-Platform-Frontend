import {config} from '../config';
import axios from 'axios';

class CommentService {
    constructor(){
        this.baseURL = config.backendUrl;
    }

    async getComments(videoId){
        try {
            const response = await axios.get(`${this.baseURL}/comments/${videoId}` , {withCredentials: true});
            return response.data;
        } catch (error) {
            console.log(`Error Fetching Comments: ${error}`);
        }
    }

    async createComment(videoId, content){
        try {
            const response = await axios.post(`${this.baseURL}/comments/${videoId}`, {
                content
            } , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Creating Comment: ${error}`);
        }
    }

    async updateComment(commentId, content){
        try{
            const response = await axios.patch(`${this.baseURL}/comments/${commentId}`,
                {
                    content
                }, {
                    withCredentials: true
                }
            )
        } catch(error){
            console.log(`Error Updating Comment: ${error}`);
        }
    }

    async deleteComment(commentId){
        try {
            const response = await axios.delete(`${this.baseURL}/comments/${commentId}` , {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log(`Error Deleting Comment: ${error}`);
        }
    }
}

const commentService = new CommentService();
export default commentService;
