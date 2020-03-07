import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminHeader() {
    return (
        <nav>
            <Link to='/edit/'>Главная</Link>
            <Link to='/edit/pages'>Страницы</Link>
            <Link to='/edit/news'>Посты</Link>
            <Link to='/edit/projects'>Проекты</Link>
            <Link to='/edit/media'>Материалы</Link>
            <Link to='/'>На сайт</Link>
        </nav>
    )
}
