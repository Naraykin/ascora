import React from 'react';
import Moment, {locale, parseZone} from 'moment';

function NewsPreview({ post }) {

    const date = Moment(Date.parse(post.date));
    Moment.lang('ru');

    return (
        <div className='news-preview'>
            <h3 className='news-preview__title'>{ post.title }</h3>
            <div className='news-preview__content'>{ post.content }</div>
            <h5 className='news-preview__author'>{ post.author }</h5>
            <span className='news-preview__date'>{ date.fromNow() }</span>
        </div>
    )
}

export default NewsPreview;