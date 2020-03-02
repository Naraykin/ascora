import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-links'>
                <a className='footer-links__item footer-links__item_vk' href='https://vk.com/ascoragames'>VK</a>
                <a className='footer-links__item footer-links__item_mail' href='mailto:ascoragames@yandex.ru'>@</a>
            </div>
            <h5 className='footer__host'>&copy; Ascora Games. Калининград. 2020</h5>
        </footer>
    )
}

export default Footer;