import axios from 'axios';
import { ADD_PERSON, DELETE_PERSON, EDIT_PERSON, GET_PERSON, GET_PERSONS, GET_SHOWN_PERSONS, PERSONS_LOADING } from './types';

export const getPersons = () => dispatch => {
    dispatch(setPersonsLoading());
    axios
        .get('/api/persons')
        .then(res =>
            dispatch({
                type: GET_PERSONS,
                payload: res.data
            })
        )
}

export const getShownPersons = () => dispatch => {
    dispatch(setPersonsLoading());
    axios
        .get('/api/persons/shown')
        .then(res =>
            dispatch({
                type: GET_SHOWN_PERSONS,
                payload: res.data
            })
        )
}

export const getPerson = id => dispatch => {
    dispatch(setPersonsLoading());
    axios
        .get(`/api/persons/${id}`)
        .then(res =>
            dispatch({
                type: GET_PERSON,
                payload: res.data
            })
        )
}

export const addPerson = person => dispatch => {
    axios
        .post('/api/persons', person)
        .then(res =>
            dispatch({
                type: ADD_PERSON,
                payload: res.data
            })
        )
}

export const editPerson = person => dispatch => {
    axios
        .put(`/api/persons/${person._id}`, person)
        .then(res =>
            dispatch({
                type: EDIT_PERSON,
                payload: res.data
            })
        )
}

export const deletePerson = id => dispatch => {
    axios
        .delete(`/api/persons/${id}`)
        .then(res => 
            dispatch({
                type: DELETE_PERSON,
                payload: id
            })    
        )
}


export const setPersonsLoading = () => {
    return {
        type: PERSONS_LOADING
    }
}