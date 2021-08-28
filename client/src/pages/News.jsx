import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewsPreview from '../components/NewsPreview';
import { getPosts } from '../actions/postActions';
import NewsIcon from '../components/Icons/NewsIcon';
import OkIcon from '../components/Icons/News/OkIcon';
import { LangContext } from '../components/LanguageContext';
import { LANG_RU } from './admin/AConstants/AConstants';

function News({ getPosts, post }) {

    const [news, setNews] = useState([]);
    const [searchText, setSearchText] = useState("");

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");

    const [searchLabelText, setSearchLabelText] = useState("");
    const [sortText, setSortText] = useState("");
    const [catText, setCatText] = useState("");

    const [catDev, setCatDev] = useState(false);
    const [catOther, setCatOther] = useState(false);
    const [catStories, setCatStories] = useState(false);
    const [catDesign, setCatDesign] = useState(false);
    const [catTeam, setCatTeam] = useState(false);

    const [lang] = useContext(LangContext);

    useEffect(() => {
        getPosts();
    }, [getPosts])

    useEffect(() => {
        if(post)
            if(post.posts.length) 
                setNews(post.posts);
    }, [post])

    useEffect(() => {
        if(lang === LANG_RU) {
            setTitle("Новости");
            setSubtitle("Разработка проектов, обновления, нытьё и прочие интересности");
            setSearchLabelText("Поиск");
            setSortText("Сортировка");
            setCatText("Категории");
        } else {
            setTitle("News");
            setSubtitle("Projects' development, updates, nagging and other interesties");
            setSearchLabelText("Search");
            setSortText("Sort by");
            setCatText("Category");
        }
    }, [lang])

    function showNews() {
        return news.map(item => <NewsPreview key={item._id} post={ item } />)
    }

    return (
        <Fragment>
            <Helmet>
                <title>Ascora | { title }</title>
            </Helmet>
            <div className='news'>
                <div className="page-heading">
                    <NewsIcon />
                    <h1 className='news__title'>{ title }</h1>
                </div>
                <h2 className='news__subtitle'>{ subtitle }</h2>
                <div className="news__filter">
                    <div className="news-filter__header">
                        <span className="news-filter-header__title">{ searchLabelText }</span>
                        <input className="news-filter-header__input" type="text" value={ searchText } onChange={ e => setSearchText(e.target.value) } />
                        <span className="news-filter-header__button">{">"}</span>
                    </div>
                    <div className="news-filter__body">
                        <div className="news-filter-body__item">
                            <span className="filter-body-item__text">{ sortText }</span>
                            <FilterBodyRadioItem text="Разработка" />
                            <FilterBodyRadioItem text="Другое" />
                            <FilterBodyRadioItem text="Истории" />
                            <FilterBodyRadioItem text="Дизайн" />
                        </div>
                        <div className="news-filter-body__item">
                            <span className="filter-body-item__text">{ catText }</span>
                            <FilterBodyCheckItem text="Разработка" onClick={ () => setCatDev(!catDev) } state={ catDev } />
                            <FilterBodyCheckItem text="Другое" onClick={ () => setCatOther(!catOther) } state={ catOther } />
                            <FilterBodyCheckItem text="Истории" onClick={ () => setCatStories(!catStories) } state={ catStories } />
                            <FilterBodyCheckItem text="Дизайн" onClick={ () => setCatDesign(!catDesign) } state={ catDesign } />
                            <FilterBodyCheckItem text="Команда" onClick={ () => setCatTeam(!catTeam) } state={ catTeam } />
                        </div>

                    </div>
                </div>
                <div className="news__posts-number">
                    <span className="news-posts-number"> Показаны посты 1-2 (из 2).</span>
                </div>
                <div className='news__wrapper'>
                    { showNews() }
                </div>
                <div className='news__pages'>
                    <a className='news-pages__link news-pages__link_active' href="/news/pages/1">1</a>
                    <a className='news-pages__link' href="/news/pages/2">2</a>
                    <a className='news-pages__link' href="/news/pages/3">3</a>
                </div>
            </div>
        </Fragment>
    )
}

function FilterBodyCheckItem({ text, onClick, state }) {
    return <div className="filter-body-item__check" onClick={ onClick } >
        <span className={ `filter-body-item-check__text` }>{ text }</span>
        <div className={ `filter-body-item-check__box ${ state ? "filter-body-item-check__box_active" : "" }` } >
            <OkIcon className="check-box__icon" />
        </div>
    </div>
}

function FilterBodyRadioItem({ text, onClick, state }) {
    return <div className="filter-body-item__radio" onClick={ onClick } >
        <span className={ `filter-body-item-radio__text` }>{ text }</span>
        <div className={ `filter-body-item-radio__box ${ state ? "filter-body-item-radio__box_active" : "" }` } >
            <div className="item-radio-box__fill" />
        </div>
    </div>
}

News.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(News);