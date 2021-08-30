import { GET_LANGS, SET_LANG } from '../actions/types';

const initialState = {
    langs: [
        {
            id: 0,
            title: 'Русский'
        },
        {
            id: 1,
            title: 'English'
        }
    ],
    lang: {},
    loading: false
};

export default function langReducer(state = initialState, action) {
    switch(action.type) {
        case GET_LANGS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            };
        case SET_LANG:
            return {
                ...state,
                lang: action.payload,
                loading: false
            };
        case LANGS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state
    }
};