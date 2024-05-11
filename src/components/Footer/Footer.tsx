import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div>
        <div className='footer'>
            <div className='firstColumn'>
                <h2>
                    Get In Touch
                </h2>
                <p>
                    the quick fox jumps over the lazy dog
                </p>
                <div className='social'>
                    <div><img src='/facebook.png'></img></div>
                    <div><img src='/instagram.png'></img></div>
                    <div><img src='/twitter.png'></img></div>
                </div>
            </div>
            <div className="secondColumn">
                <div className='leftColumn'>
                    <h2>
                        Company info
                    </h2>
                    <ul>
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className='rightColumn'>
                    <h2>Features</h2>
                    <ul>
                        <li>Business Marketing</li>
                        <li>User Analytic</li>
                        <li>Live Chat</li>
                        <li>Unlimited Support</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='secondFooter'>
            <h5>Made by @anastasiamorozz All Right Reserved</h5>
        </div>
        </div>
    );
}

export default Footer;