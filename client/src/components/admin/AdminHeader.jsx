import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminHeader() {
    const USER_NAME_TEXT = 'Веб розробник';
    const LOGOUT_TEXT = 'Выйти';

    return (
        <nav className='admin-header'>
            <span className='admin-header__username'>{ USER_NAME_TEXT }</span>
            <Link className='admin-header__logout' to='/edit/logout'>{ LOGOUT_TEXT }</Link>
            
            <Link className='admin-header__link' to='/edit/'>Главная</Link>
            <Link className='admin-header__link' to='/edit/pages'>Страницы</Link>
            <Link className='admin-header__link' to='/edit/news'>Посты</Link>
            <Link className='admin-header__link' to='/edit/projects'>Проекты</Link>
            <Link className='admin-header__link' to='/edit/media'>Материалы</Link>
            <Link className='admin-header__link' to='/'>На сайт</Link>
        </nav>
    )
}
