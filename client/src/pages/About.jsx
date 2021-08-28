import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import AboutIcon from '../components/Icons/AboutIcon';
import PersonsSection from './about/PersonsSection';
import { getShownPersons } from '../actions/personActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LangContext } from '../components/LanguageContext';
import { LANG_RU } from './admin/AConstants/AConstants';


function About({ getShownPersons, person }) {
    const [aboutPersons, setAboutPersons] = useState([]);
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [bottomText, setBottomText] = useState("");
    
    const [lang] = useContext(LangContext);

    useEffect(() => {
        if(lang === LANG_RU) {
            setTitle("О команде Ascora Games");
            setSubtitle("Ascora - это объединение людей, любящих игры, и тех, кто создает новые шедевры.");
            setBottomText("Будем знакомы.");
        } else {
            setTitle("About Ascora Games team");
            setSubtitle("Ascora is a union of people who love games and the ones who create masterpieces.");
            setBottomText("Nice to meet you.");
        }
    }, [lang])

    useEffect(() => {
        getShownPersons();
    }, [getShownPersons]);

    useEffect(() => {
        if(person) {
            if(person.persons.length) {
                setAboutPersons(person.persons);
                console.log("done");
            }
        }
    }, [person]);

    useEffect(() => {
        console.log("aboutPersons:" + JSON.stringify(aboutPersons))
    }, [aboutPersons])


    return (
        <Fragment>
            <Helmet>
                <title>Ascora | { title }</title>
            </Helmet>
            <div className='about'>
                <div className="page-heading">
                    <AboutIcon />
                    <h1 className='about__title'>{ title }</h1>
                </div>
                <p className='about__subtitle'>
                    { subtitle }
                </p>
                <div className="about__pixels">
                    <div className="pixels__item pixels__item_first" />
                    <div className="pixels__item pixels__item_second" />
                    <div className="pixels__item pixels__item_third" />
                    <div className="pixels__item pixels__item_fourth" />
                    <div className="pixels__item pixels__item_fifth" />
                    {/*<div className="pixels__item pixels__item_sixth" />
                    <div className="pixels__item pixels__item_seventh" />*/}
                </div>
                <PersonsSection info={ aboutPersons } />
                <div className="about__bottom">
                    <span>{ bottomText }</span>
                </div>
            </div>
        </Fragment>
    )
}

About.propTypes = {
    getShownPersons: PropTypes.func.isRequired,
    person: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    person: state.person
});

export default connect(mapStateToProps, { getShownPersons })(About);
