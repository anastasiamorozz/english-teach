import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useState, useEffect } from 'react';
import { Context } from '../..';
import './LogoutButton.css';

const LogoutButton: FC = () => {
    const {store} = useContext(Context);

    const handlelogout = async () =>{
        await store.logout();
    }
    
    return (
        <div className='logoutButton'>
            <button onClick={handlelogout}><img src='/logout.png'></img><b> Logout</b></button>
        </div>
    );
}

export default observer(LogoutButton);