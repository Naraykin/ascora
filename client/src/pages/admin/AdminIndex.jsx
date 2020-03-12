import React, { useState, useEffect} from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/postActions';
import PropTypes from 'prop-types';

import NewsItem from '../../components/admin/AdminNewsItem';

function AdminIndex({ getPosts, post }) {

    const NEW_POST_AUTHOR = 'Веб-разработчик';
    const ADD_NEW_POST_HEADING_PLACEHOLDER = 'Заголовок';
    const ADD_NEW_POST_CONTENT_PLACEHOLDER = 'Текст поста';

    const [news, setNews] = useState([]);
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostContent, setNewPostContent] = useState('');

    // INIT
    useEffect(() => {
        getPosts();
    }, []);

    useEffect(() => {
        if(post) setNews(post.posts);
    }, [post])

    function showNews() {
        return (
            <TransitionGroup>
                { 
                    news.map(item => 
                        <CSSTransition key={item._id} timeout={300} classNames='fade' >
                            <NewsItem post={ item } deletePost={ () => deletePost(item._id) } />
                        </CSSTransition>)
                }
            </TransitionGroup>
        );
    }

    function addPost() {
        const newItem = {
            _id: news[news.length - 1]._id + 1,
            title: newPostTitle,
            content: newPostContent,
            author: NEW_POST_AUTHOR,
            date: new Date().toDateString()
        };
        setNews([...news, newItem]);
        setNewPostTitle('');
        setNewPostContent('');
    }

    function deletePost(id) {
        setNews(news.filter(item => item._id !== id));
    }

    return (
        <div>
            <h1>Главная | админ панель</h1>
            <div>
                <h2>Новости</h2>
                
                <form className='admin-index-add-post'>
                    <label className='admin-index-add-post__label'>Новый пост</label>
                    <input className='admin-index-add-post__title' name='title' type='text' value={newPostTitle} placeholder={ ADD_NEW_POST_HEADING_PLACEHOLDER } onChange={e => setNewPostTitle(e.target.value)}></input>
                    <textarea className='admin-index-add-post__content' name='content' type='text' value={newPostContent} placeholder={ ADD_NEW_POST_CONTENT_PLACEHOLDER } onChange={e => setNewPostContent(e.target.value)} />
                    <input className='admin-index-add-post__submit-btn' type='button' value='Добавить' onClick={ addPost } />
                </form>
                <div>
                    { showNews() }
                </div>
            </div>
        </div>
    )
}

AdminIndex.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(AdminIndex);