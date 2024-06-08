import React from 'react';
import { IUser } from '../../models/IUser';
import { observer } from 'mobx-react-lite';
import './MiniProfile.css';

const MiniProfile = (user:IUser) => {
    return (
        <div>
            <div className='miniProfile'>
                <img src={user.photo}></img>
                <div className='miniFollowerInfo'>
                    {user.firstName} {user.lastName}
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

export default observer(MiniProfile);