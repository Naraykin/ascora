import React, { useEffect, useState, useContext } from 'react';
//import { Link } from 'react-router-dom';

import TankiImg from '../img/tanki.jpg';

import FbIcon from './Icons/FbIcon';
import VkIcon from './Icons/VkIcon';
import TwitterIcon from './Icons/TwitterIcon';
import RedditIcon from './Icons/RedditIcon';
import InstIcon from './Icons/InstIcon';
import AGShortenLogoIcon from './Icons/AGShortenLogoIcon';
import { Link } from 'react-router-dom';
import { LANG_RU, LANG_EN } from '../pages/admin/AConstants/AConstants';
import { LangContext } from './LanguageContext';

function Footer() {
    const LANG_BUTTON_ACTIVE_CLASS = "footer-links__lang_active";
    const [langContext, setLangContext] = useContext(LangContext);

    const [linkIndexText, setLinkIndexText] = useState("");
    const [linkNewsText, setLinkNewsText] = useState("");
    const [linkProjectsText, setLinkProjectsText] = useState("");
    const [linkMediaText, setLinkMediaText] = useState("");
    const [linkAboutText, setLinkAboutText] = useState("");
    const [donateHeadingText, setDonateHeadingText] = useState("");
    const [donateDescText, setDonateDescText] = useState("");
    const [donateMoreText, setDonateMoreText] = useState("");
    const [donateTargetText, setDonateTargetText] = useState("");
    const [donateButtonText, setDonateButtonText] = useState("");
    const [copyText, setCopyText] = useState("");
    const [ruButtonClass, setRuButtonClass] = useState("");
    const [enButtonClass, setEnButtonClass] = useState("");

    useEffect(() => {
        if(langContext === LANG_RU) {
            setLinkIndexText("Главная");
            setLinkNewsText("Новости");
            setLinkProjectsText("Проекты");
            setLinkMediaText("Материалы");
            setLinkAboutText("О нас");
            setDonateHeadingText("Поддержка команды");
            setDonateDescText("Вы можете поддержать нашу команду активностью в социальных сетях, оценив наши игры в GooglePlay и подобных площадках или пожертвовав некоторую сумму на реализацию проектов. ");
            setDonateMoreText("Подробнее");
            setDonateTargetText("Конкретно: покупка шрифтов");
            setDonateButtonText("Пожертвовать");
            setCopyText("Ascora Games. Калининград. 2021");
            setRuButtonClass(LANG_BUTTON_ACTIVE_CLASS);
            setEnButtonClass("");
        } else {
            setLinkIndexText("Home");
            setLinkNewsText("News");
            setLinkProjectsText("Projects");
            setLinkMediaText("Materials");
            setLinkAboutText("About us");
            setDonateHeadingText("Donates");
            setDonateDescText("You can support our team with your activity on social media, rating our games in GooglePlay and similar platforms or donating some money for projects implementation. ");
            setDonateMoreText("More");
            setDonateTargetText("Specifically: buying fonts");
            setDonateButtonText("Donate");
            setCopyText("Ascora Games. Kaliningrad. 2021");
            setRuButtonClass("");
            setEnButtonClass(LANG_BUTTON_ACTIVE_CLASS);
        }
    }, [langContext]);

    return (
        <footer className='footer'>
            <div className='footer-wrapper'>
                <div className='footer-links footer-links_social'>
                    <FooterLink link='https://vk.com/ascoragames'>
                        <VkIcon />
                    </FooterLink>
                    <FooterLink link='https://twitter.com/AscoraG'>
                        <TwitterIcon />
                    </FooterLink>
                    <FooterLink link='https://www.reddit.com/user/AscoraGames'>
                        <RedditIcon />
                    </FooterLink>
                    <FooterLink link='https://www.facebook.com/Ascora-Games-111449427141408'>
                        <FbIcon />
                    </FooterLink>
                    <FooterLink link='https://www.instagram.com/ascoragames'>
                        <InstIcon />
                    </FooterLink>
                </div>
                <div className='footer-links'>
                    <div className={`footer-links__lang ${ruButtonClass}`} onClick={ () => setLangContext(LANG_RU) }>Русский</div>
                    <div className={`footer-links__lang ${enButtonClass}`} onClick={ () => setLangContext(LANG_EN) }>English</div>
                </div>
                <div className='footer-links'>
                    <ul className='footer-list'>
                        <FooterSitewideLink title={ linkIndexText } link='/' />
                        <FooterSitewideLink title={ linkNewsText } link='/news/' />
                        <FooterSitewideLink title={ linkProjectsText } link='/projects/' />
                        <FooterSitewideLink title={ linkMediaText } link='/media/' />
                        <FooterSitewideLink title={ linkAboutText } link='/about/' />
                    </ul>
                </div>
                <div className='footer-links'>
                    <div className='footer-donate'>
                        <h3 className='footer-donate__heading'>{ donateHeadingText }</h3>
                        <ul className='footer-donate__list'>
                            <li className='footer-donate__list-item'>{ donateDescText }<a href="/about-donate">{ donateMoreText }</a></li>
                        </ul>
                        <div className='footer-donate__progress'>
                            <h3 className='footer-donate__progress-title'>{ donateTargetText }</h3>
                            <h4 className='footer-donate__progress-subtitle'>1 488 &#8381; / 2 756 &#8381;</h4>
                            <div className='footer-donate__progress-bar'>
                                <div className='footer-donate__progress-bar-done'>
                                    <span className='footer-donate__progress-bar-percent footer-donate__progress-bar-percent_front'>54%</span>
                                </div>
                                <span className='footer-donate__progress-bar-percent footer-donate__progress-bar-percent_back'>54%</span>
                            </div>
                        </div>
                        <a className='footer-donate__button' href='/donate'>{ donateButtonText }</a>
                    </div>
                </div>
            </div>
            <div className='footer-rights'>
                <AGShortenLogoIcon className='footer-logo' />
                <h5 className='footer__host'>&copy; { copyText }</h5>
            </div>
        </footer>
    )
}

function FooterLink({ link, children }) {

    return (
        <a href={ link } className='footer-link'>
            { children }
        </a>
    );
}

function FooterSitewideLink({ link, title }) {
    return (
        <li className="footer-list-item">
            <Link to={ link } className='footer-sidewide-link' >
                { title }
            </Link>
        </li>
    )
}

export default Footer;