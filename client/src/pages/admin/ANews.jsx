import React, { useState, useEffect, Fragment } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/postActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import NewsItem from '../../components/admin/AdminNewsItem';
import AdminLayout from '../../components/admin/AdminLayout';
import ASidePanel, { ASideBlock, ASideSearch } from '../../components/admin/ASidePanel';


function AdminNews({ getPosts, post }) {
    const [news, setNews] = useState([]);
    
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    useEffect(() => {
        if(post) setNews(post.posts);
    }, [post])

    function postPlaceHolder() {
        return (
            <CSSTransition timeout={300} classNames='fade' >
                <div className='admin-news-placeholder'>
                    <div className='admin-news-placeholder__main'>
                        <div className='admin-news-placeholder__heading' />
                        <div className='admin-news-placeholder__content'>
                            <div className='admin-news-placeholder__content-item admin-news-placeholder__content-item_first' />
                            <div className='admin-news-placeholder__content-item admin-news-placeholder__content-item_second' />
                            <div className='admin-news-placeholder__content-item admin-news-placeholder__content-item_third' />
                            <div className='admin-news-placeholder__content-item admin-news-placeholder__content-item_fourth' />
                            <div className='admin-news-placeholder__content-item admin-news-placeholder__content-item_fifth' />
                            <div className='admin-news-placeholder__content-item admin-news-placeholder__content-item_sixth' />
                            <div className='admin-news-placeholder__content-item admin-news-placeholder__content-item_seventh' />
                        </div>
                    </div>
                    <div className='admin-news-placeholder-actions'>
                        <div className='admin-news-placeholder-actions__button'></div>
                        <div className='admin-news-placeholder-actions__button' />
                    </div>
                </div>
            </CSSTransition>
        );
    }

    function defineNews() {
        if(post) {
            if(post.loading) {
                return(
                    <Fragment>
                        { postPlaceHolder() }
                        { postPlaceHolder() }
                    </Fragment>
                )
            } else {
                return(
                    <Fragment>
                        <Link className='admin-news__add-post' to='/edit/news/new-post'>+</Link>
                        {
                            news.map(item =>
                                <CSSTransition key={item._id} timeout={300} classNames='fade' >
                                    <NewsItem item={ item } />
                                </CSSTransition>)
                        }
                    </Fragment>
                ) 
            }
        }
    }

    return (
        <AdminLayout title='Новости' hasBack={ false } >
            <div className='admin-news'>
                <div className='admin-news__news-wrapper'>
                    <TransitionGroup>
                        { defineNews() }
                    </TransitionGroup>
                </div>
                <ASidePanel>
                    <p>A Side Panel Item</p>
                    <ASideBlock>
                        <p>A Side Block Item</p>
                    </ASideBlock>
                    <ASideSearch label='Поиск' />
                </ASidePanel>
            </div>
        </AdminLayout>
    )
}

AdminNews.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(AdminNews);