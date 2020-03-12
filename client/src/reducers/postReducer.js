import React from 'react';
import { GET_POSTS, ADD_POST, DELETE_POST } from '../actions/types';

const initialState = {
    posts: [
        {
            _id: 0,
            title: 'Начали разработку сайта',
            content: <>
                    <p>Ваш институт - социальные роли.</p>
                    <h3>В планах:</h3>
                    <ul>
                        <li>Перевести логотип в вектор</li>
                        <li>Определиться со стилистикой артов членов команды</li>
                        <li>Изменить сивол ^ на другую стрелку</li>
                    </ul>
                </>,
            author: 'Веб-разработчик',
            date: new Date(1580099982438).toDateString()
        },
        {
            _id: 1,
            title: 'Продолжаем разработку',
            content: 'А это уже похвально.',
            author: 'Веб-разработчик',
            date: new Date(1580999982438).toDateString()
        }
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state
            };
        case ADD_POST:
            break;
        case DELETE_POST:
            break;
        default:
            return state
    }
};