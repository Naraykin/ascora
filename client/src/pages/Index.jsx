import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { getPosts } from '../actions/postActions';
import UnderlayFirst from '../components/Icons/UnderlayFirst';

import NewsPreview from '../components/NewsPreview';
import AGHoleyIcon from '../components/Icons/AscoraGamesHoley';
import NewsIcon from '../components/Icons/NewsIcon';
import ProjectsIcon from '../components/Icons/ProjectsIcon';
import MediaIcon from '../components/Icons/MediaIcon';
import AboutIcon from '../components/Icons/AboutIcon';
import RrIcon from '../components/Icons/Rr';
import IndexProjectsSection from '../components/index/ProjectsSection';
import IndexSunsetBg from '../components/Icons/IndexSunsetBg';

import VadimSImg from '../img/team/vadim_s.png';
import IgorMImg from '../img/team/igor_m.png';
import LubovOImg from '../img/team/lubov_o.png';
import VladPImg from '../img/team/vlad_p.png';
import VadimGImg from '../img/team/vadim_g.png';
import IndexTitle from '../components/index/IndexTitle';
import { LangContext } from '../components/LanguageContext';
import { LANG_RU } from './admin/AConstants/AConstants';

function Index({ getPosts, post }) {
    const NEWS_BUTTON_LABEL = 'Больше постов';

    const [title, setTitle] = useState("");
    const [tagline, setTagline] = useState("");
    const [newsText, setNewsText] = useState("");
    const [projectsText, setProjectsText] = useState("");
    const[linkMediaText, setLinkMediaText] = useState("");
    const[linkAboutText, setLinkAboutText] = useState("");
    
    const [lang] = useContext(LangContext);

    const [news, setNews] = useState([]);
    
    useEffect(() => {
        getPosts();
    }, [getPosts])

    useEffect(() => {
        if(post) setNews(post.posts);
    }, [post])

    useEffect(() => {
        if(lang === LANG_RU) {
            setTitle("Главная");
            setTagline("Любим игры, создаём с душой");
            setNewsText("Новости");
            setProjectsText("Проекты");
            setLinkMediaText("Материалы");
            setLinkAboutText("О нас");
        } else {
            setTitle("Home");
            setTagline("We love games, make them with our souls");
            setNewsText("News");
            setProjectsText("Projects");
            setLinkMediaText("Media");
            setLinkAboutText("About us");
        }
    }, [lang])

    function showNews() {
        if(news)
            return news.sort((a, b) => new Date(b.date) - new Date(a.date)).map(post => <NewsPreview key={ post._id } post={ post} /> )
    }

    return (
        <Fragment>
            <Helmet>
                <title>Ascora | { title }</title>
            </Helmet>
            <div className='index'>
                <section className='index-top'>
                    <IndexSunsetBg className='index-top__sunset-bg' />
                    <div className='index-menu'>
                        <IndexMenuItem link='/news' text={ newsText }>
                            <NewsIcon />
                        </IndexMenuItem>
                        <IndexMenuItem link='/projects' text={ projectsText }>
                            <ProjectsIcon />
                        </IndexMenuItem>
                        <IndexMenuItem link='/media' text={ linkMediaText }>
                            <MediaIcon />
                        </IndexMenuItem>
                        <IndexMenuItem link='/about' text={ linkAboutText }>
                            <AboutIcon />
                        </IndexMenuItem>
                    </div>
                    <AGHoleyIcon className='index__logo' />
                    <div className='index-top__back-circle index-top__back-circle_large' />
                    <div className='index-top__back-circle index-top__back-circle_medium' />
                    <div className='index-top__back-circle index-top__back-circle_small' />
                    { /* <div className='index-row'> */ }
                        <IndexDev image={ VadimSImg } mod='far-left'></IndexDev>
                        <IndexDev image={ LubovOImg } mod='close-left'></IndexDev>
                        <IndexDev image={ VadimGImg } mod='center'></IndexDev>
                        <IndexDev image={ IgorMImg } mod='close-right'></IndexDev>
                        <IndexDev image={ VladPImg } mod='far-right'></IndexDev>
                    { /* </div> */ }
                    {/* <div className='index__logo' style={{ backgroundImage: `url('${LogoImg}')` }} /> */}
                    <h1 className='title index__title'>{ tagline }</h1>
                    { /* <ArrowDownIcon className='index-top__arrow' /> */ }
                    <UnderlayFirst className='index-top__underlay' />
                </section>
                <section className='index-news'>
                <IndexTitle title={ newsText } light={ true }>
                        <NewsIcon />
                    </IndexTitle>
                    <div className='index-news__wrapper'>
                        { showNews() }
                    </div>

                    <Link to='/news' className='index-news__more-btn'>
                        <RrIcon />
                        { NEWS_BUTTON_LABEL }
                    </Link>
                </section>
                <IndexProjectsSection />
                {/*
                <section className='index-media' >
                    <IndexTitle title='Материалы'>
                        <MediaIcon />
                    </IndexTitle>
                */}
                    {/*<h2 className='index-media__title'>Материалы</h2>*/}
                    {/*
                    <div className='index-media__wrapper'>
                        <div className='index-media__arts'>
                            <div className='index-slide-arrow index-slide-arrow_left'>{ '<' }</div>
                            <div className='index-slide-arrow index-slide-arrow_right'>{ '>' }</div>
                        </div>
                        <div className='index-media__video'>(видео)</div>
                        <div className='index-media__stories'>(истории)</div>
                    </div>
                    */}
                    { /* <Underlay className='index-media__underlay' /> */ }
                {/* </section> */}
                { /* <IndexAboutSection title={ ABOUT_TITLE } text={ ABOUT_TEXT } /> */ }
            </div>
        </Fragment>
    )
}

function IndexMenuItem({ link, text, children }) {
    return (
        <Link to={ link } className='index-menu__item'>
            { children }
            <span className='index-menu__item-text'>{ text }</span>
        </Link>
    );
}

function IndexDev({ image, mod }) {
    return (
        <div className={ `index-row__dev ${ mod ? 'index-row__dev_' + mod : '' }` } style={{ backgroundImage: `url('${ image }')` }} />
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