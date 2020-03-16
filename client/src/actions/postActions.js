import axios from 'axios';
import { GET_POSTS, ADD_POST, DELETE_POST, POSTS_LOADING } from './types';

export const getPosts = () => dispatch => {
    dispatch(setPostsLoading());
    axios
        .get('/api/posts')
}

export const deletePost = id => {
    return {
        type: DELETE_POST,
        payload: id
    }
}

export const addPost = item => {
    return {
        type: ADD_POST,
        payload: item
    }
}

export const setPostsLoading = () => {
    return {
        type: POSTS_LOADING
    }
}