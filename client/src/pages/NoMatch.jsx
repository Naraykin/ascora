import React, { useContext, useEffect, useState } from 'react';
import { LangContext } from '../components/LanguageContext';
import { LANG_RU } from './admin/AConstants/AConstants';


function NoMatch() {
    const NOT_FOUND_TEXT_RU = "Страница не найдена";
    const NOT_FOUND_TEXT_EN = "Page Not Found";

    const [lang] = useContext(LangContext);

    const [notFoundText, setNotFoundText] = useState();

    useEffect(() => {
        if(lang === LANG_RU) setNotFoundText(NOT_FOUND_TEXT_RU);
        else setNotFoundText(NOT_FOUND_TEXT_EN);
    }, [lang])


    return (
        <div className="no-match">
            <h1 className="no-match__code">404</h1>
            <span className="no-match__text">{ notFoundText }</span>
        </div>
    )
}

export default NoMatch;