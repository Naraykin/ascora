import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import NewsPreview from '../components/NewsPreview';
import ProjectPreview from '../components/ProjectPreview';
import ArrowDownIcon from '../components/Icons/ArrowDownIcon';
import Logo from '../components/Icons/Logo';

import LogoImg from '../img/ascora-square.jpg';
import GlsImg from '../img/gls.png';
import DrkImg from '../img/drk.png';
import TvodImg from '../img/tvod.jpg';
import TvodBg0Img from '../img/tvod_bg_0.jpg';
import TvodBg1Img from '../img/tvod_bg_1.jpg';

function Index() {

    const [activeProjectID, setActiveProjectID] = useState(0);
    const [projectsBackground, setProjectsBackground] = useState(TvodBg0Img);
    const [projectsCurrentTitle, setProjectsCurrentTitle] = useState('...');
    const [projectsCurrentContent, setProjectsCurrentContent] = useState('...');
    

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

    useEffect(() => {
        const currentProject = projects.find(project => project._id === activeProjectID); 
        setProjectsCurrentTitle(currentProject.title);
        setProjectsCurrentContent(currentProject.content);
        setProjectsBackground(currentProject.backgrounds[0])
    }, [activeProjectID]);

    const posts = [
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
    ];

    function showProjects() {
        return projects.map(project => <ProjectPreview key={ project._id } project={ project } activeProject={ activeProjectID } setActiveProject={ () => setActiveProjectID(project._id) } onClick={ () => setActiveProjectID(project._id) }  />);
    }

    return (
        <Fragment>
            <Helmet>
                <title>Ascora | Главная</title>
            </Helmet>
            <div className='index'>
                <section className='index-top'>
                    <Logo className='index__logo' />
                    <div className='index-row'>
                        <div className='index-row__dev index-row__dev_far-left' style={{ backgroundImage: `url('${DrkImg}')` }} />
                        <div className='index-row__dev index-row__dev_close-left' style={{ backgroundImage: `url('${GlsImg}')` }} />
                        <div className='index-row__dev index-row__dev_center' style={{ backgroundImage: `url('${GlsImg}')` }} />
                        <div className='index-row__dev index-row__dev_close-right' style={{ backgroundImage: `url('${DrkImg}')` }} />
                        <div className='index-row__dev index-row__dev_far-right' style={{ backgroundImage: `url('${GlsImg}')` }} />
                    </div>
                    {/* <div className='index__logo' style={{ backgroundImage: `url('${LogoImg}')` }} /> */}
                    <h1 className='title index__title'>Любим игры, создаём с душой</h1>
                    <ArrowDownIcon className='index-top__arrow' />
                </section>
                <section className='index-news'>
                    <h2 className='index-news__title'>Новости</h2>
                    <div className='index-news__wrapper'>
                        { posts.sort((a, b) => new Date(b.date) - new Date(a.date)).map(post => <NewsPreview key={ post._id } post={ post} /> ) }
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
                </section>
                <section className='index-about'>
                    <h2 className='index-about__title'>О нас</h2>
                    <p className='index-about__text'>Метамодерновый фронт един</p>
                    <div className='index-about__wrapper'>
                        <a className='index-about__link' href='#'>[вк]</a>
                        <a className='index-about__link' href='#'>[ют]</a>
                        <a className='index-about__link' href='#'>[хз]</a>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default Index;