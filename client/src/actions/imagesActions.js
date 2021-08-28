import axios from 'axios';
import { GET_IMAGES, GET_IMAGE, DELETE_IMAGE, EDIT_IMAGE, IMAGES_LOADING } from './types';

export const getImages = () => dispatch => {
    dispatch(setImagesLoading());
    axios
        .get('/api/images')
        .then(res =>
            dispatch({
                type: GET_IMAGES,
                payload: res.data
            })
        )
}

export const getImage = (id) => dispatch => {
    dispatch(setImagesLoading());
    axios
        .get(`/api/images/${id}`)
        .then(res =>
            dispatch({
                type: GET_IMAGE,
                payload: res.data
            })
        )
}

export const editImage = image => dispatch => {
    axios
        .put(`/api/images/${image._id}`, image)
        .then(res =>
            dispatch({
                type: EDIT_IMAGE,
                payload: res.data
            })
        )
}

export const deleteImage = id => dispatch => {
    axios
        .delete(`/api/images/${id}`)
        .then(res => 
            dispatch({
                type: DELETE_IMAGE,
                payload: id
            })    
        )
}


export const setImagesLoading = () => {
    return {
        type: IMAGES_LOADING
    }
}