import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoIcon from '../components/Icons/Logo';
import AboutIcon from '../components/Icons/AboutIcon';
import MediaIcon from '../components/Icons/IconPresent';

function Header() {
    const HIDE_CLASS = 'header_hide';
    
    const location = useLocation();
    const [isIndex, setIsIndex] = useState(true);
    const headerRef = useRef(null);
    const [pageScroll, setPageScroll] = useState(0);

    function handleIndexHeader(event) {
        let scrollTop = window.pageYOffset;
        setPageScroll(scrollTop);
    }

    // INIT
    useEffect(() => {
        window.addEventListener('scroll', handleIndexHeader);
        return () => window.removeEventListener('scroll', handleIndexHeader);
    }, []);

    useEffect(() => {
        setPageScroll(window.pageYOffset);
    }, [pageScroll]);

    useEffect(() => {
        const heightConstraint = window.innerHeight * 0.75 || document.body.clientHeight * 0.75;

        if(location.pathname === '/' && pageScroll < heightConstraint) setIsIndex(true);
        else setIsIndex(false);
    }, [location, pageScroll]);

    return (
        <header className={`header ${ isIndex ? HIDE_CLASS : '' }`} ref={ headerRef }>
            <div className='header-logo'>
                <Link to='/' className='header-logo__link'>
                    <LogoIcon className='header-logo__icon' />
                </Link>
            </div>
            <nav className='header-navigation'>
                <Link to='/news' className={`header-navigation__item ${location.pathname === '/'}`}><span>N</span>Новости</Link>
                <Link to='/projects' className='header-navigation__item'><span>P</span>Проекты</Link>
                <Link to='/media' className='header-navigation__item'><MediaIcon className='header-navigation__item-icon' />Материалы</Link>
                <Link to='/about' className='header-navigation__item'><AboutIcon className='header-navigation__item-icon' />О нас</Link>
            </nav>
        </header>
    )
}

export default Header;