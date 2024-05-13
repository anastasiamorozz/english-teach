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
                    <img src='/login-picture.png'></img>
                </div>
            </div>
        </div>
    );
}

export default observer(LoginPage);