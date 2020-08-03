import React from 'react';
import {ReactComponent as Logo} from '../assets/logo.svg';
import {ReactComponent as FacebookLogo} from '../assets/facebook-icon.svg'
import {ReactComponent as InstagramLogo} from '../assets/instagram-icon.svg'

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="logo">
                <Logo />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
            <div className="social-media-logos">
                <FacebookLogo />
                <InstagramLogo />
            </div>
            <p>Andres Inciarte 2020. All rights reserved</p>
        </div>
    );
}

export default Footer;