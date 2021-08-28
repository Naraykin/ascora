import React, {useEffect, useState, useContext} from 'react';
import { LangContext } from './LanguageContext';
import { LANG_RU } from '../pages/admin/AConstants/AConstants';
import Moment from 'moment';

function NewsPreview({ post }) {
    const THEMES_RU = ["Разработка", "Другое"];
    const THEMES_EN = ["Development", "Other"];

    const [langContext] = useContext(LangContext);

    const [readText, setReadText] = useState("");
    const [title, setTitle] = useState("");
    const [preview, setPreview] = useState("");
    const [themeClass, setThemeClass] = useState("");
    const [themeText, setThemeText] = useState("");
    const [authorText, setAuthorText] = useState("");
    const [moreLink, setMoreLink] = useState("");
    const date = Moment(Date.parse(post.date));
    Moment.locale('ru');

    function defineAuthor() {
        if (post.author === 0) {
            if(langContext === LANG_RU){
                setAuthorText("Веб-разработчик");
            } else {
                setAuthorText("Web-developer");
            }
        } else {
            setAuthorText(post.author + "");
        }
    }

    useEffect(() => {
        if (langContext === LANG_RU) {
            setReadText("Читать");
        } else {
            setReadText("Read");
        }
    }, [langContext]);

    useEffect(() => {
        if(langContext === LANG_RU) {
            setTitle(post.RU.title);
            setPreview(post.RU.preview);
            setThemeText(THEMES_RU[post.theme]);
        } else {
            setTitle(post.EN.title);
            setPreview(post.EN.preview);
            setThemeText(THEMES_EN[post.theme]);
        }
        setMoreLink(post._id);
        defineAuthor();
    }, [post, langContext]);

    return (
        <div className='news-preview'>
            <div className='news-preview__left-side'>
                <div className='news-preview__image' style={{ backgroundImage: `url('${ post.image_link }')` }} />
                <span className={`news-preview__theme news-preview__theme_${themeClass}`}>{ themeText }</span>
            </div>
            <div className='news-preview__main'>
                <h3 className='news-preview__title'>{ title }</h3>
                <div className='news-preview__preview'>{ preview }</div>
                <span className='news-preview__author'>{ authorText }</span>
                <a href={ `/news/posts/${moreLink}` } className="news-preview__link">{ readText }</a>
                <span className='news-preview__date'>{ date.fromNow() }</span>
            </div>
        </div>
    )
}

export default NewsPreview;