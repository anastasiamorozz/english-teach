import { observer } from 'mobx-react-lite';
import React, { FC, useEffect, useState } from 'react';
import { store } from '../..';
import { IUser } from '../../models/IUser';
import UserService from '../../services/UserService';
import './UserInRankedBlock.css';

const UserInRankedBlock = (user:IUser) => {

    const [avatar, setAvatar] = useState<Blob | any>(undefined);

    useEffect(()=>{
        const fetchAvatar = async () =>{
            try{
                const photo_res = await UserService.getAvatar(user.id);
                setAvatar(photo_res);
            }catch(e){
                console.error('Error fetching user info:', e);
            }
        }

        fetchAvatar()

    }, [store])

    return (
        <div className='user'>
            <img src={avatar || './avatar.jpg'} className='avatar'></img>
            <div className='info'>
                <p className='name'>{user.firstName} {user.lastName}</p>
                <p className='words'>Words: {user.wordsCount}</p>
            </div>
        </div>
    );
}

export default observer(UserInRankedBlock);