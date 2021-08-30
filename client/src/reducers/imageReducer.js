import { GET_IMAGE, GET_IMAGES, EDIT_IMAGE, DELETE_IMAGE, IMAGES_LOADING } from '../actions/types';

const initialState = {
    images: [],
    image: [],
    loading: false
};

export default function imageReducer(state = initialState, action) {
    switch(action.type) {
        case GET_IMAGES:
            return {
                ...state,
                images: action.payload,
                loading: false
            };
        case GET_IMAGE:
            return {
                ...state,
                image: action.payload,
                loading: false
            };
        case EDIT_IMAGE:
            return {
                ...state,
                images: state.images.map(item => item._id === action.payload._id ? action.payload : item )
            }
        case DELETE_IMAGE:
            return {
                ...state,
                images: state.images.filter(item => item._id !== action.payload)
            };
        case IMAGES_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state
    }
};