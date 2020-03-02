import React, { Fragment } from 'react';
import NewsPreview from '../components/NewsPreview';
import LogoImg from '../img/ascora-square.jpg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Index() {

    const posts = [
        {
            _id: 0,
            title: 'Начали разработку сайта',
            content: 'Ваш институт - социальные роли.',
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

    return (
        <Fragment>
            <Helmet>
                <title>Ascora | Главная</title>
            </Helmet>
            <div className='index'>
                <section className='index-top'>
                    <div className='index__logo' style={{ backgroundImage: `url('${LogoImg}')` }} />
                    <h1 className='title index__title'>Любим игры, создаём с душой</h1>
                    <div className='index-top__arrow'>^</div>
                </section>
                <section className='index-news'>
                    <h2 className='index-news__title'>Свежие новости</h2>
                    <div className='index-news__wrapper'>
                        { posts.sort((a, b) => new Date(b.date) - new Date(a.date)).map(post => <NewsPreview key={ post._id } post={ post} /> ) }
                    </div>
                    <Link to='/news' className='index-news__more-btn'>Все новости</Link>
                </section>
                <section className='index-projects'>
                    <h2 className='index-projects__title'>(проекты)</h2>
                    <div className="index-projects__wrapper">
                        <div className="index-projects__project">[проект 1]</div>
                        <div className="index-projects__project">[проект 2]</div>
                    </div>
                </section>
                <section className='index-media'>
                    <h2 className='index-media__title'>(материалы)</h2>
                    <div className='index-media__wrapper'>
                        <div className='index-media__arts'>(арты)</div>
                        <div className='index-media__video'>(видео)</div>
                        <div className='index-media__stories'>(истории)</div>
                    </div>
                </section>
                <section className='index-about'>
                    <h2 className='index-about__title'>(о нас)</h2>
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