import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='header'>
            <Link to={'/topics'}><img src="/logo-no-background.png" alt="logo" /></Link>
        </div>
    );
}

export default Header;