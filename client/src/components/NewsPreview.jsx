import React from 'react'

function NewsPreview({ post }) {
    return (
        <div className='news-preview'>
            <h3 className='news-preview__title'>{ post.title }</h3>
            <div className='news-preview__content'>{ post.content }</div>
            <h5 className='news-preview__author'>{ post.author }</h5>
            <span className='news-preview__date'>{ post.date }</span>
        </div>
    )
}

export default NewsPreview;