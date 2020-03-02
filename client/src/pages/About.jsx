import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

function About() {
    return (
        <Fragment>
            <Helmet>
                <title>Ascora | О нас</title>
            </Helmet>
            <div className='about'>
                <h1 className='about__title'>О команде Ascora</h1>
                <p className='about__content'>
                    Я танцую пьяный - loco, продлевая свои сны.
                    <br />
                    Дую MJ, moonwalk - MJ, Rocket-rocket, Jimmy Dean.
                    <br />
                    Кэшимир номер один, захожу за время, сын
                    <br />
                    Dinero на моей связи, мои связи — easy win
                </p>
            </div>
        </Fragment>
    )
}

export default About;