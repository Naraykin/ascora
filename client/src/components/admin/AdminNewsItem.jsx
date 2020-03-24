import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import PropTypes from 'prop-types';

function AdminNewsItem({ item, deletePost }) {
    const EDIT_LINK_TEXT = 'Редактировать';
    const DELETE_BUTTON_TEXT = 'Удалить';

    return (
        <div className='admin-news-item'>
            <div className='admin-news-item__main'>
                <h3 className='admin-news-item__heading'>{ item.title }</h3>
                <p className='admin-news-item__content'>{ item.content }</p>
                <div className='admin-news-item__meta'>
                    <span className='admin-news-item__author'>{ item.author }</span>
                    <span className='admin-news-item__date'>{ item.date }</span>
                </div>
            </div>
            <div className='admin-news-item__actions'>
                <input className='admin-news-item__delete-button' type='button' value={ DELETE_BUTTON_TEXT } onClick={ () => deletePost(item._id) } />
                <Link className='admin-news-item__edit-link' to={`/edit/${ item._id }`}>{ EDIT_LINK_TEXT }</Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    deletePost: PropTypes.func.isRequired,
    post: state.post
});

export default connect(mapStateToProps , { deletePost } )(AdminNewsItem);