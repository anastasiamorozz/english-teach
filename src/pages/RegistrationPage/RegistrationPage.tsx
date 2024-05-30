import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import { observer } from 'mobx-react-lite';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const RegistrationPage: FC = () => {
    return (
        <div>
            <Header></Header>

            <div className='content'>
                <RegistrationForm></RegistrationForm>
                <div className='picture'>
                    <img src='/login-picture.png'></img>
                </div>
            </div>
        </div>
    );
}

export default observer(RegistrationPage);