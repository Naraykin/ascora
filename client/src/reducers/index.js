import { combineReducers } from 'redux';

import postReducer from './postReducer';
import projectReducer from './projectReducer';
import personReducer from './personReducer';
import imageReducer from './imageReducer';

export default combineReducers({
    post: postReducer,
    person: personReducer,
    project: projectReducer,
    image: imageReducer
});