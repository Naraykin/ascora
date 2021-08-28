import React, { useEffect, useState, useRef, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoIcon from '../components/Icons/AscoraGamesHoley';
import NewsIcon from '../components/Icons/NewsIcon';
import ProjectsIcon from '../components/Icons/ProjectsIcon';
import MediaIcon from './Icons/MediaIcon';
import AboutIcon from '../components/Icons/AboutIcon';
import { LangContext } from './LanguageContext';
import { LANG_RU } from '../pages/admin/AConstants/AConstants';

function Header() {
    const HIDE_CLASS = 'header_hide';

    const [lang] = useContext(LangContext);

    const[newsText, setNewsText] = useState("");
    const[projectsText, setProjectsText] = useState("");
    const[mediaText, setMediaText] = useState("");
    const[aboutText, setAboutText] = useState("");
    
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

    useEffect(() => {
        if(lang === LANG_RU) {
            setNewsText("Новости");
            setProjectsText("Проекты");
            setMediaText("Материалы");
            setAboutText("О нас");
        } else {
            setNewsText("News");
            setProjectsText("Projects");
            setMediaText("Media");
            setAboutText("About us");
        }
    }, [lang]);

    return (
        <header className={`header ${ isIndex ? HIDE_CLASS : '' }`} ref={ headerRef }>
            <div className='header-logo'>
                <Link to='/' className='header-logo__link'>
                    <LogoIcon className='header-logo__icon' />
                </Link>
            </div>
            <nav className='header-navigation'>
                <Link to='/news' className={`header-navigation__item ${location.pathname === '/'}`}><NewsIcon className='header-navigation__item-icon' />{ newsText }</Link>
                <Link to='/projects' className='header-navigation__item'><ProjectsIcon className='header-navigation__item-icon' />{ projectsText }</Link>
                <Link to='/media' className='header-navigation__item'><MediaIcon className='header-navigation__item-icon' />{ mediaText }</Link>
                <Link to='/about' className='header-navigation__item'><AboutIcon className='header-navigation__item-icon' />{ aboutText }</Link>
            </nav>
        </header>
    )
}

export default Header;