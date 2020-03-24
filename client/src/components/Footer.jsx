import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-links'>
                <div className='footer-links__item'>RU</div>
                <div className='footer-links__item'>EN</div>
            </div>
            <h5 className='footer__host'>&copy; Ascora Games. Калининград. 2020</h5>
        </footer>
    )
}

export default Footer;