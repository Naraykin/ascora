import React, { Fragment } from 'react';
import NewsPreview from '../components/NewsPreview';
import LogoImg from '../img/ascora-square.jpg';
import { useLocation } from 'react-router-dom';
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
                    <div className='index-news__more-btn'></div>
                </section>
            </div>
        </Fragment>
    )
}

export default Index;