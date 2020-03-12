import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminNewsItem({ post, deletePost }) {
    const EDIT_LINK_TEXT = 'Редактировать';
    const DELETE_BUTTON_TEXT = 'Удалить';

    return (
        <div className='admin-news-item'>
            <div className='admin-news-item__main'>
                <h3 className='admin-news-item__heading'>{ post.title }</h3>
                <p className='admin-news-item__content'>{ post.content }</p>
                <div className='admin-news-item__meta'>
                    <span className='admin-news-item__author'>{ post.author }</span>
                    <span className='admin-news-item__date'>{ post.date }</span>
                </div>
            </div>
            <div className='admin-news-item__actions'>
                <input className='admin-news-item__delete-button' type='button' value={ DELETE_BUTTON_TEXT }  onClick={ deletePost } />
                <Link className='admin-news-item__edit-link' to={`/edit/${ post._id }`}>{ EDIT_LINK_TEXT }</Link>
            </div>
        </div>
    )
}
