import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
function News() {

    function showNews() {

    }

    return (
        <Fragment>
            <Helmet>
                <title>Ascora | Новости проекта</title>
            </Helmet>
            <div className='news'>
                <h1 className='news__title'>Новости проекта</h1>
                <h2 className='news__subtitle'>Летаю за духа в КСку получше, чем Нави</h2>
                <div className='news__wrapper'>

                </div>
            </div>
        </Fragment>
    )
}

export default News;