import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AdminHeader() {
    const USER_NAME_TEXT = 'Веб розробник';
    const LOGOUT_TEXT = 'Выйти';
    const location = useLocation();

    return (
        <nav className='admin-header'>
            <span className='admin-header__username'>{ USER_NAME_TEXT }</span>
            <Link className='admin-header__logout' to='/edit/logout'>{ LOGOUT_TEXT }</Link>
            <Link className={ `admin-header__link ${ location.pathname === '/edit/' ? 'admin-header__link_active' : '' }` }
                to='/edit/'>Главная</Link>
            <Link className={ `admin-header__link ${ location.pathname === '/edit/pages' ? 'admin-header__link_active' : '' }` }
                to='/edit/pages'>Страницы</Link>
            <Link className={ `admin-header__link ${ location.pathname === '/edit/news' ? 'admin-header__link_active' : '' }` }
                to='/edit/news'>Посты</Link>
            <Link className={ `admin-header__link ${ location.pathname === '/edit/projects' ? 'admin-header__link_active' : '' }` }
                to='/edit/projects'>Проекты</Link>
            <Link className={ `admin-header__link ${ location.pathname === '/edit/media' ? 'admin-header__link_active' : '' }` }
                to='/edit/media'>Материалы</Link>
            <Link className='admin-header__link admin-header__link_new-group'
                to='/'>На сайт</Link>
        </nav>
    )
}
