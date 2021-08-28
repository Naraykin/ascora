import React from 'react';
import VkIcon from '../Icons/VkIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import FbIcon from '../Icons/FbIcon';
import RedditIcon from '../Icons/RedditIcon';
import InstIcon from '../Icons/InstIcon';

export default function AboutSection({ title, text }) {

    const ICON_CLASSNAME = 'index-about__link-icon';

    return (
        <section className='index-about'>
            <h2 className='index-about__title'>{ title }</h2>
            <p className='index-about__text'>{ text }</p>
            <div className='index-about__wrapper'>
                <a className='index-about__link' href='https://vk.com'>
                    <VkIcon className={ ICON_CLASSNAME } />
                </a>
                <a className='index-about__link' href='https://twitter.com/AscoraG'>
                    <TwitterIcon className={ ICON_CLASSNAME } />
                </a>
                <a className='index-about__link' href='https://www.reddit.com/user/AscoraGames'>
                    <RedditIcon className={ ICON_CLASSNAME } />
                </a>
                <a className='index-about__link' href='https://www.facebook.com/Ascora-Games-111449427141408'>
                    <FbIcon className={ ICON_CLASSNAME } />
                </a>
                <a className='index-about__link' href='https://www.instagram.com/ascoragames'>
                    <InstIcon className={ ICON_CLASSNAME } />
                </a>
            </div>
        </section>
    )
}
