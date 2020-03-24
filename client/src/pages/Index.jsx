import React, { Fragment, useEffect, useState } from 'react';
import { Link, /*useLocation*/ } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Moment from 'moment';
import { connect } from 'react-redux';

import { getPosts } from '../actions/postActions';
import UnderlayFirst from '../components/Icons/UnderlayFirst';

import NewsPreview from '../components/NewsPreview';
import ArrowDownIcon from '../components/Icons/ArrowDownIcon';
//import Logo from '../components/Icons/Logo';
import AGSolidIcon from '../components/Icons/AscoraGamesSolid';
import AGHoleyIcon from '../components/Icons/AscoraGamesHoley';
import Logo from '../components/Icons/NewLogo';
import NewsIcon from '../components/Icons/NewsIcon';
import ProjectsIcon from '../components/Icons/ProjectsIcon';
import MediaIcon from '../components/Icons/MediaIcon';
import AboutIcon from '../components/Icons/AboutIcon';
import Underlay from '../components/Icons/Underlay';
import IndexProjectsSection from '../components/index/ProjectsSection';
import IndexSunsetBg from '../components/Icons/IndexSunsetBg';

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

function Index({ getPosts, post }) {

    const INDEX_TAGLINE = 'Любим игры, создаём с душой';

    const NEWS_TITLE = 'Новости';
    const NEWS_BUTTON_LABEL = 'Класс. Какие ещё новости?';

    const ABOUT_TITLE = 'О нас';
    const ABOUT_TEXT = 'Где нас найти';

    const TOP_TOGGLE = {
        SOLID: 'SOLID',
        HOLEY: 'HOLEY'
    }

    const [vadimSImage, setVadimSMImage] = useState(VadimSImg);
    const [igorMImage, setIgorMImage] = useState(IgorMImg);
    const [lubovOImage, setLubovOImage] = useState(LubovOImg);
    const [vladPImage, setVladPImage] = useState(VladPImg);
    const [vadimGImage, setVadimGImage] = useState(VadimGImg);

    const [news, setNews] = useState([]);

    const [topToggle, setTopToggle] = useState(TOP_TOGGLE.SOLID);

    // INIT
    useEffect(() => {
        getPosts();
    }, [])

    useEffect(() => {
        switch(topToggle) {
            case TOP_TOGGLE.SOLID:
                break;
            case TOP_TOGGLE.HOLEY:
                break;
        }
    }, [topToggle])

    useEffect(() => {
        if(post) setNews(post.posts);
    }, [post])

    function showNews() {
        if(news)
            return news.sort((a, b) => new Date(b.date) - new Date(a.date)).map(post => <NewsPreview key={ post._id } post={ post} /> )
    }

    function showLogo() {
        if(topToggle === TOP_TOGGLE.SOLID)
            return <AGSolidIcon className='index__logo' />
        else
            return <AGHoleyIcon className='index__logo' />
    }

    /*
        <div className='index-top-toggle'>
            <div className={`index-top-toggle__item ${topToggle === TOP_TOGGLE.UNDERLINED ? 'index-top-toggle__item_active' : ''}`} onClick={() => setTopToggle(TOP_TOGGLE.UNDERLINED)}>{TOP_TOGGLE.UNDERLINED}</div>
            <div className={`index-top-toggle__item ${topToggle === TOP_TOGGLE.FADED ? 'index-top-toggle__item_active' : ''}`} onClick={() => setTopToggle(TOP_TOGGLE.FADED)}>{TOP_TOGGLE.FADED}</div>
        </div>
    */

    return (
        <Fragment>
            <Helmet>
                <title>Ascora | Главная</title>
            </Helmet>
            <div className='index'>
                <section className='index-top'>
                    <IndexSunsetBg className='index-top__sunset-bg' />
                    <div className='index-top-toggle'>
                        <div className={`index-top-toggle__item ${topToggle === TOP_TOGGLE.SOLID ? 'index-top-toggle__item_active' : ''}`} onClick={() => setTopToggle(TOP_TOGGLE.SOLID)}>{TOP_TOGGLE.SOLID}</div>
                        <div className={`index-top-toggle__item ${topToggle === TOP_TOGGLE.HOLEY ? 'index-top-toggle__item_active' : ''}`} onClick={() => setTopToggle(TOP_TOGGLE.HOLEY)}>{TOP_TOGGLE.HOLEY}</div>
                    </div>
                    <div className='index-menu'>
                        <Link to='/news' className='index-menu__item'><NewsIcon className='index-menu__item-icon' /></Link>
                        <Link to='/projects' className='index-menu__item'><ProjectsIcon className='index-menu__item-icon' /></Link>
                        {/*<Logo className='index__logo' />*/}
                        { showLogo() }
                        <Link to='/media' className='index-menu__item'><MediaIcon className='index-menu__item-icon' /></Link>
                        <Link to='/about' className='index-menu__item'><AboutIcon className='index-menu__item-icon' /></Link>
                    </div>
                    <div className='index-top__back-circle index-top__back-circle_large'/>
                    <div className='index-top__back-circle index-top__back-circle_medium'/>
                    <div className='index-top__back-circle index-top__back-circle_small'/>
                    <div className='index-row'>
                        <div className='index-row__dev index-row__dev_far-left' style={{ backgroundImage: `url('${vadimSImage}')` }} />
                        <div className='index-row__dev index-row__dev_close-left' style={{ backgroundImage: `url('${lubovOImage}')` }} />
                        <div className='index-row__dev index-row__dev_center' style={{ backgroundImage: `url('${vadimGImage}')` }} />
                        <div className='index-row__dev index-row__dev_close-right' style={{ backgroundImage: `url('${igorMImage}')` }} />
                        <div className='index-row__dev index-row__dev_far-right' style={{ backgroundImage: `url('${vladPImage}')` }} />
                    </div>
                    {/* <div className='index__logo' style={{ backgroundImage: `url('${LogoImg}')` }} /> */}
                    <h1 className='title index__title'>{ INDEX_TAGLINE }</h1>
                    <ArrowDownIcon className='index-top__arrow' />
                    <UnderlayFirst className='index-top__underlay' />
                </section>
                <section className='index-news'>
                    <h2 className='index-news__title'>{ NEWS_TITLE }</h2>
                    <div className='index-news__wrapper'>
                        { showNews() }
                    </div>
                    <Link to='/news' className='index-news__more-btn'>{ NEWS_BUTTON_LABEL }</Link>
                </section>
                <IndexProjectsSection />
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