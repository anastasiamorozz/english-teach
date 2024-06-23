import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='header'>
            <Link to={'/topics'}><img src={document.body.getAttribute('data-theme') === 'dark' ? '/logo-no-background.png' : '/logo-removebg.png'} alt="Login" /></Link>
        </div>
    );
}

export default Header;