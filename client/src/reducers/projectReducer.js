import React from 'react';
import { GET_PROJECTS, ADD_PROJECT, DELETE_PROJECT, PROJECTS_LOADING } from '../actions/types';

import TvodImg from '../img/tvod.jpg';
import TvodBg0Img from '../img/tvod_bg_0.jpg';
import TvodBg1Img from '../img/tvod_bg_1.jpg';
import NvrImg from '../img/nvr0.png';
import MountainsImg from '../img/mountains.jpg';
import MrImg from '../img/mr.jpg';
import SparksImg from '../img/sparks.jpg';

import TvodIcon from '../components/Icons/TvodIcon';

const initialState = {
    projects: [
        {
            _id: 0,
            title: <TvodIcon className='projects-tvod-title' />,
            content: 'Просторы космоса наполнились слухами о храме, в котором может исполниться любое желание. Многие пытались его найти, но обнаружить его удалось лишь двум космическим беженцам, чью планету уничтожило богоподобное существо, именуемое Конструктором.',
            image: TvodImg,
            backgrounds: [TvodBg0Img, TvodBg1Img]
        },
        {
            _id: 1,
            title: 'The Run of Spirits',
            content: <>
                    Це просто цигарки, й небагато шкоди в них.
                    Люба, зрозумій, мене засмучуєш ти ци.
                    Це просто цигарки, ти також колись смалив.
                    Це було давно, щоб здаватися крутим.
                    Це просто цигарки, легені зіпсують тобі.
                    Що ж ну шансів небагато, бо на тиждень всього дві.
                    Це просто цигарки, а буде більше десяти.
                    Милий, коли схочу, то я зупинюсь, повір.
                </>,
            image: NvrImg,
            backgrounds: [MountainsImg, SparksImg, MrImg]
        }
    ],
    loading: false
};

export default function projectReducer(state = initialState, action) {
    switch(action.type) {
        case GET_PROJECTS:
            return {
                ...state
            };
        case ADD_PROJECT:
            return {
                ...state,
                projects: [action.payload, ...state.posts]
            };
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(item => item._id !== action.payload)
            };
        case PROJECTS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state
    }
};