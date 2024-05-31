import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useState, useEffect } from 'react';
import { Context } from '../..';
import './LogoutButton.css';

const LogoutButton: FC = () => {
    const {store} = useContext(Context);
    
    return (
        <div className='logoutButton'>
            <button onClick={() => store.logout()}><img src='/logout.png'></img> Logout</button>
        </div>
    );
}

export default observer(LogoutButton);