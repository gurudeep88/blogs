import axios from 'axios';
import { API_SERVICE_HOST } from 'config';

export const createPost = async (post) => {
    try{
    await axios.post(`${API_SERVICE_HOST}/create`, post);
    }catch(e){console.log('error in post creation')}
}

export const getAllPosts = async (param) => {
    try{
       const response = await axios.get(`${API_SERVICE_HOST}/posts${param}`);
       return response.data;
    }catch(e){
        console.log('error in fetching all posts in client', e)
    }
}

export const getPost = async (id) => {
    try{
       const response = await axios.get(`${API_SERVICE_HOST}/post/${id}`);
       return response.data;
    }catch(e){
        console.log('error in fetching post in client', e)
    }
}

export const updatePost = async(id, post) => {
    try{
        const response = await axios.post(`${API_SERVICE_HOST}/update/${id}`, post);
        return response.data;
    }catch(e){
        console.log('error in updating post in client', e);

    }
}

export const deletePost = async(id) => {
    try{
        await axios.delete(`${API_SERVICE_HOST}/delete/${id}`)
    }catch(e){
        console.log('error in deleting post in client')
    }
}

export const uploadImage = async(imageData) => {
    try{
        return await axios.post(`${API_SERVICE_HOST}/image/upload`, imageData)
    }catch(e){
        console.log('error in uploading images in client');
    }
}