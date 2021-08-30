import { ADD_PERSON, DELETE_PERSON, GET_PERSON, GET_PERSONS, GET_SHOWN_PERSONS, PERSONS_LOADING, EDIT_PERSON } from '../actions/types';

const initialState = {
    persons: [],
    person: {},
    loading: false
};

export default function personReducer(state = initialState, action) {
    switch(action.type) {
        case GET_PERSONS:
            return {
                ...state,
                persons: action.payload,
                loading: false
            };
        case GET_SHOWN_PERSONS:
            return {
                ...state,
                persons: action.payload,
                loading: false
            };
        case GET_PERSON:
            return {
                ...state,
                person: action.payload,
                loading: false
            };
        case ADD_PERSON:
            return {
                ...state,
                persons: [action.payload, ...state.persons]
            };
        case EDIT_PERSON:
            return {
                ...state,
                persons: state.persons.map(item => item._id === action.payload._id ? action.payload : item )
            }
        case DELETE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(item => item._id !== action.payload)
            };
        case PERSONS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state
    }
};