import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
function Header() {
    const navigate = useNavigate();

    const navigator = () =>{
        navigate('/topics')
    }

    return (
        <div className='header' onClick={()=>{navigator()}}>
            <img src={document.body.getAttribute('data-theme') === 'dark' ? '/logo-no-background.png' : '/logo-removebg.png'} alt="Login" />
        </div>
    );
}

export default Header;