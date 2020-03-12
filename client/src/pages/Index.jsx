import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';
import UnderlayFirst from '../components/Icons/UnderlayFirst';
import PropTypes from 'prop-types';

import NewsPreview from '../components/NewsPreview';
import ProjectPreview from '../components/ProjectPreview';
import ArrowDownIcon from '../components/Icons/ArrowDownIcon';
import Logo from '../components/Icons/Logo';
import NewsIcon from '../components/Icons/NewsIcon';
import MediaIcon from '../components/Icons/IconPresent';
import AboutIcon from '../components/Icons/AboutIcon';
import Underlay from '../components/Icons/Underlay';


//import LogoImg from '../img/ascora-square.jpg';

import VadimSFadedImg from '../img/team/faded/vadim_s.png';
import IgorMFadedImg from '../img/team/faded/igor_m.png';
import LubovOFadedImg from '../img/team/faded/lubov_o.png';
import VladPFadedImg from '../img/team/faded/vlad_p.png';
import VadimGFadedImg from '../img/team/faded/vadim_g.png';
import VadimSImg from '../img/team/vadim_s.png';
import IgorMImg from '../img/team/igor_m.png';
import LubovOImg from '../img/team/lubov_o.png';
import VladPImg from '../img/team/vlad_p.png';
import VadimGImg from '../img/team/vadim_g.png';
import GlsImg from '../img/gls.png';
import DrkImg from '../img/drk.png';
import TvodImg from '../img/tvod.jpg';
import TvodBg0Img from '../img/tvod_bg_0.jpg';
import TvodBg1Img from '../img/tvod_bg_1.jpg';
import IconPresent from '../components/Icons/IconPresent';

function Index({ getPosts, post }) {
    const ABOUT_TITLE = 'О нас';
    const ABOUT_TEXT = 'Где нас найти';

    const TOP_TOGGLE = {
        UNDERLINED: 'UNDERLINED',
        FADED: 'FADED'
    }

    const [vadimSImage, setVadimSMImage] = useState(VadimSImg);
    const [igorMImage, setIgorMImage] = useState(IgorMImg);
    const [lubovOImage, setLubovOImage] = useState(LubovOImg);
    const [vladPImage, setVladPImage] = useState(VladPImg);
    const [vadimGImage, setVadimGImage] = useState(VadimGImg);

    const [activeProjectID, setActiveProjectID] = useState(0);
    const [projectsBackground, setProjectsBackground] = useState(TvodBg0Img);
    const [projectsCurrentTitle, setProjectsCurrentTitle] = useState('...');
    const [projectsCurrentContent, setProjectsCurrentContent] = useState('...');

    const [news, setNews] = useState([]);

    const [topToggle, setTopToggle] = useState(TOP_TOGGLE.UNDERLINED);

    const projects = [
        {
            _id: 0,
            title: 'The Void of Desires',
            content: 'Просторы космоса наполнились слухами о храме, в котором может исполниться любое желание. Многие пытались его найти, но обнаружить его удалось лишь двум космическим беженцам, чью планету уничтожило богоподобное существо, именуемое Конструктором.',
            image: TvodImg,
            backgrounds: [TvodBg0Img, TvodBg1Img]
        },
        {
            _id: 1,
            title: '[проект 2]',
            content: 'Просторы космоса наполнились слухами о храме, в котором может исполниться любое желание. Многие пытались его найти, но обнаружить его удалось лишь двум космическим беженцам, чью планету уничтожило богоподобное существо, именуемое Конструктором.',
            image: TvodImg,
            backgrounds: [TvodBg0Img, TvodBg1Img]
        }
    ]

    // INIT
    useEffect(() => {
        getPosts();
    }, [])

    useEffect(() => {
        switch(topToggle) {
            case TOP_TOGGLE.UNDERLINED:
                setVadimSMImage(VadimSImg);
                setIgorMImage(IgorMImg);
                setLubovOImage(LubovOImg);
                setVladPImage(VladPImg);
                setVadimGImage(VadimGImg);
                break;
            case TOP_TOGGLE.FADED:
                setVadimSMImage(VadimSFadedImg);
                setIgorMImage(IgorMFadedImg);
                setLubovOImage(LubovOFadedImg);
                setVladPImage(VladPFadedImg);
                setVadimGImage(VadimGFadedImg);
                break;
        }
    }, [topToggle])

    useEffect(() => {
        if(post) setNews(post.posts);
    }, [post])

    useEffect(() => {
        const currentProject = projects.find(project => project._id === activeProjectID); 
        setProjectsCurrentTitle(currentProject.title);
        setProjectsCurrentContent(currentProject.content);
        setProjectsBackground(currentProject.backgrounds[0])
    }, [activeProjectID]);

    function showNews() {
        if(news)
            return news.sort((a, b) => new Date(b.date) - new Date(a.date)).map(post => <NewsPreview key={ post._id } post={ post} /> )
    }

    function showProjects() {
        return (
            <TransitionGroup>
                { projects.map(project => (
                    <CSSTransition key={ project._id } timeout={ 500 }>
                        <ProjectPreview project={ project } activeProject={ activeProjectID } setActiveProject={ () => setActiveProjectID(project._id) } onClick={ () => setActiveProjectID(project._id) }  />
                    </CSSTransition>
                )) }
            </TransitionGroup>
        );
    }

    return (
        <Fragment>
            <Helmet>
                <title>Ascora | Главная</title>
            </Helmet>
            <div className='index'>
                <section className='index-top'>
                    <div className='index-top-toggle'>
                        <div className={`index-top-toggle__item ${topToggle === TOP_TOGGLE.UNDERLINED ? 'index-top-toggle__item_active' : ''}`} onClick={() => setTopToggle(TOP_TOGGLE.UNDERLINED)}>{TOP_TOGGLE.UNDERLINED}</div>
                        <div className={`index-top-toggle__item ${topToggle === TOP_TOGGLE.FADED ? 'index-top-toggle__item_active' : ''}`} onClick={() => setTopToggle(TOP_TOGGLE.FADED)}>{TOP_TOGGLE.FADED}</div>
                    </div>
                    <div className='index-menu'>
                        <Link to='/news' className='index-menu__item'><NewsIcon className='index-menu__item-icon' /></Link>
                        <Link to='/projects' className='index-menu__item'><NewsIcon className='index-menu__item-icon' /></Link>
                        <Logo className='index__logo' />
                        <Link to='/media' className='index-menu__item'><IconPresent className='index-menu__item-icon' /></Link>
                        <Link to='/about' className='index-menu__item'><AboutIcon className='index-menu__item-icon' /></Link>
                    </div>
                    <div className='index-top__back-circle index-top__back-circle_large'/>
                    <div className='index-top__back-circle index-top__back-circle_medium'/>
                    <div className='index-top__back-circle index-top__back-circle_small'/>
                    <div className='index-row' style={{ borderBottom: `${topToggle === TOP_TOGGLE.UNDERLINED ? '2px solid #fafafa' : 'none'}` }}>
                        <div className='index-row__dev index-row__dev_far-left' style={{ backgroundImage: `url('${vadimSImage}')` }} />
                        <div className='index-row__dev index-row__dev_close-left' style={{ backgroundImage: `url('${lubovOImage}')` }} />
                        <div className='index-row__dev index-row__dev_center' style={{ backgroundImage: `url('${vadimGImage}')` }} />
                        <div className='index-row__dev index-row__dev_close-right' style={{ backgroundImage: `url('${igorMImage}')` }} />
                        <div className='index-row__dev index-row__dev_far-right' style={{ backgroundImage: `url('${vladPImage}')` }} />
                    </div>
                    {/* <div className='index__logo' style={{ backgroundImage: `url('${LogoImg}')` }} /> */}
                    <h1 className='title index__title'>Любим игры, создаём с душой</h1>
                    <ArrowDownIcon className='index-top__arrow' />
                    <UnderlayFirst className='index-top__underlay' />
                </section>
                <section className='index-news'>
                    <h2 className='index-news__title'>Новости</h2>
                    <div className='index-news__wrapper'>
                        { showNews() }
                    </div>
                    <Link to='/news' className='index-news__more-btn'>Все новости</Link>
                </section>
                <section className='index-projects' style={{ backgroundImage: `url('${ projectsBackground }')` }}>
                    <div className='index-projects__overlay'>
                        <h2 className='index-projects__title'>Проекты</h2>
                        <div className='index-projects__info-wrapper'>
                            <h3 className='index-projects-current__title'>{ projectsCurrentTitle }</h3>
                            <p className='index-projects-current__content'>{ projectsCurrentContent }</p>
                        </div>
                        <div className="index-projects__wrapper">
                            { showProjects() }
                        </div>
                        <div className='index-project__slider-row'>
                            <div className='index-project__slider-dot' />
                            <div className='index-project__slider-dot' />
                            <div className='index-project__slider-dot' />
                            <div className='index-project__slider-dot' />
                        </div>
                    </div>
                </section>
                <section className='index-media' >
                    <h2 className='index-media__title'>Материалы</h2>
                    <div className='index-media__wrapper'>
                        <div className='index-media__arts'>(арты)</div>
                        <div className='index-media__video'>(видео)</div>
                        <div className='index-media__stories'>(истории)</div>
                    </div>
                    <Underlay className='index-media__underlay' />
                </section>
                <section className='index-about'>
                    <h2 className='index-about__title'>{ ABOUT_TITLE }</h2>
                    <p className='index-about__text'>{ ABOUT_TEXT }</p>
                    <div className='index-about__wrapper'>
                        <a className='index-about__link' href='#'>[вк]</a>
                        <a className='index-about__link' href='#'>[твитер]</a>
                        <a className='index-about__link' href='#'>[реддит]</a>
                        <a className='index-about__link' href='#'>[фасебоок]</a>
                        <a className='index-about__link' href='#'>[инст]</a>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

Index.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(Index);