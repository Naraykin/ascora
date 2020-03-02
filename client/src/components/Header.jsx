import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
        <header className='header'>
            <div className='header__logo'>
                <Link to='/' className='header__logo-link'>ASCORA</Link>
            </div>
            <nav className='header-navigation'>
                <Link to='/news' className='header-navigation__item'>Новости</Link>
                <Link to='/projects' className='header-navigation__item'>Проекты</Link>
                <Link to='/media' className='header-navigation__item'>Материалы</Link>
                <Link to='/about' className='header-navigation__item'>О нас</Link>
            </nav>
        </header>
    )
}

export default Header;