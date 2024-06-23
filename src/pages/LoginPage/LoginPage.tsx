import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import { observer } from 'mobx-react-lite';
import './LoginPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage: FC = () => {
    return (
        <div>
            <Header></Header>

            <div className='content'>
                <LoginForm></LoginForm>
                <div className='picture'>
                <img src={document.body.getAttribute('data-theme') === 'dark' ? '/login-picture.png' : '/login-page-02.png'} alt="Login" />
                </div>  
            </div>
{/* 
            <button onClick={()=>
                document.body.setAttribute("data-theme", "light")
            }>Light Theme</button>

            <button onClick={()=>
                document.body.setAttribute("data-theme", "dark")
            }>Dark Theme</button> */}
        </div>
    );
}

export default observer(LoginPage);