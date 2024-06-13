import React, { useEffect, useState } from 'react';
import { IUser } from '../../models/IUser';
import { observer } from 'mobx-react-lite';
import './MiniProfile.css';
import UserService from '../../services/UserService';
import { useNavigate } from 'react-router';

const MiniProfile = (user:IUser) => {
    const [avatarUrl, setAvatarUrl] = useState<Blob | any>(undefined);
    const navigate = useNavigate();
    
    useEffect(()=>{
        const getAvatar =async (userId:number) => {
            try{
                const photo_res = await UserService.getAvatar(userId);
                setAvatarUrl(photo_res);
            }catch(e){
                console.error('Error fetching user avatar:', e);
            }
        }

        getAvatar(user.id);
    }, [user])


    return (
        <div>
            <div className='miniProfile' onClick={()=>{
                navigate('/myprofile', {state: user})
            }}> 
                <img src={avatarUrl}></img>
                <div className='miniFollowerInfo'>
                    {user.firstName} {user.lastName}
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

export default observer(MiniProfile);