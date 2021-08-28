import React, {useState, useEffect, useContext} from 'react';
import HtmlToReact from 'html-react-parser';
import { LANG_RU } from '../admin/AConstants/AConstants';
import { LangContext } from '../../components/LanguageContext';
import ImageLoader from '../../components/ImageLoader';

function PersonBlock({ isLeft, number, person}) {
    let mod = isLeft ? "about__person-block_left" : "about__person-block_right";

    const [lang] = useContext(LangContext);
    
    const [name, setName] = useState("");
    const [descToShow, setDescToShow] = useState("");
    const [imageId, setImageId] = useState("");

    useEffect(() => {
        if(lang === LANG_RU) {
            setName(person.RU.name);
            setDescToShow(HtmlToReact(person.RU.description));
        } else {
            setName(person.EN.name);
            setDescToShow(HtmlToReact(person.EN.description));
        }
        setImageId(person.image_id);
        console.log("PersonBlock image ID " + person.image_id);
    }, [person, lang]);

    return (
        <div className={"about__person-block " + mod }>
            <span className="person-block__number" >{ number }</span>
            <div className="person-block__photo">
                <ImageLoader className="photo__image" imageId={ imageId } />
                <div className="photo__corner photo__corner_top-left" />
                <div className="photo__corner photo__corner_bottom-right" />
            </div>
            <div className="person-block__content-wrapper">
                <h3 className="content-wrapper__heading">
                    { name }
                </h3>
                <div className="content-wrapper__content">
                    { descToShow }
                </div>

            </div>
        </div>
    )
}

export default PersonBlock;