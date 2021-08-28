import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ArtPreview from '../../components/ArtPreview';
import MediaIcon from '../../components/Icons/MediaIcon';

import TreesImg from '../../img/trees.jpg';
import BbImg from '../../img/bb.jpg';
import SliImg from '../../img/sli.jpg';
import MrImg from '../../img/mr.jpg';
import ColImg from '../../img/colour.jpg';
import MobImg from '../../img/mob.jpg';
import Helmet from 'react-helmet';

function Media() {
    const arts = [
        {
            _id: 0,
            image: TreesImg,
            title: 'Метка - два дерева',
            description: 'ауаыкып'
        },
        {
            _id: 1,
            image: BbImg,
            title: 'Бамбук',
            description: 'увыфацфафц'
        },
        {
            _id: 2,
            image: SliImg,
            title: 'Виктор',
            description: 'фывфафафа'
        },
        {
            _id: 3,
            image: MrImg,
            title: 'Мраморный узор',
            description: 'кккккккккк'
        },
        {
            _id: 4,
            image: MobImg,
            title: 'Моб',
            description: 'шрпоопрно'
        },
        {
            _id: 5,
            image: ColImg
            ,
            title: 'Картинка с Unsplash',
            description: 'мивпва'
        },
    ];

    function showArts() {
        return arts.map(art => <ArtPreview key={ art._id } art={ art } />);
    }

    return (
        <Fragment>
            <Helmet>
                <title>Ascora | Материалы</title>
            </Helmet>
            <div className='media'>
                <div className='media-top'>
                    <div className="page-heading">
                        <MediaIcon />
                        <h1 className='title media__title'>Материалы проектов</h1>
                    </div>
                    <nav className='media-navitaion'>
                        <a href="#arts" className='media-navitaion__item'>Арты</a>
                        
                        <a href="#video" className='media-navitaion__item'>Видео</a>
                        
                        <a href="#stories" className='media-navitaion__item'>Истории</a>
                    </nav>
                </div>
                <div className='media-wrapper'>
                    <div className='media-description'>
                        <p>
                            Хранилище материалов.
                            Требуется наполнить разделы текстом.
                            Это всё стоит заменить.
                        </p>
                    </div>
                    <section id="arts" className='media-section media-section_arts'>
                        <div className='media-arts__top'>
                            <h2 className='media-arts__title'>Арты</h2>
                            <Link className='media-arts__more' to='/media/arts'>Ещё</Link>
                        </div>
                        <div className='media-arts__wrapper'>
                            { showArts() }
                        </div>
                    </section>
                    <section id="video" className='media-section media-section_video'>
                        <h2>(видео)</h2>
                    </section>
                    <section id="stories" className='media-section media-section_stories'>
                        <h2>(истории)</h2>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}

export default Media;