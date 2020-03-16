import axios from 'axios';
import { GET_PROJECTS, DELETE_PROJECT, ADD_PROJECT, PROJECTS_LOADING } from './types';

export const getProjects = () => {
    return {
        type: GET_PROJECTS
    }
}

export const deleteProject = id => {
    return {
        type: DELETE_PROJECT,
        payload: id
    }
}

export const addProject = item => {
    return {
        type: ADD_PROJECT,
        payload: item
    }
}

export const setProjectsLoading = () => {
    return {
        type: PROJECTS_LOADING
    }
}