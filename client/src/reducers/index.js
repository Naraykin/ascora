import { combineReducers } from 'redux';

import postReducer from './postReducer';
import projectReducer from './projectReducer';

export default combineReducers({
    post: postReducer,
    project: projectReducer
});