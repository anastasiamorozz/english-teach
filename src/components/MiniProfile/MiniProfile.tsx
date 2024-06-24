import React, { useEffect, useState } from 'react';
import { IUser } from '../../models/IUser';
import { observer } from 'mobx-react-lite';
import './MiniProfile.css';
import UserService from '../../services/UserService';
import { useNavigate } from 'react-router';

const MiniProfile = (user: IUser) => {
    const [avatarUrl, setAvatarUrl] = useState<string | undefined>(undefined);
    const [isFollowing, setIsFollowing] = useState<boolean>(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        const getAvatar = async (userId: number) => {
            try {
                const photoRes = await UserService.getAvatar(userId);
                setAvatarUrl(photoRes);
            } catch (e) {
                console.error('Error fetching user avatar:', e);
            }
        }

        getAvatar(user.id);
    }, [user]);

    useEffect(() => {
        const checkIsFollowing = async (followingId: number) => {
            try {
                const response = await UserService.isUserFollowing(followingId);
                console.log('Is following ', response.data)
                setIsFollowing(response.data); 
            } catch (e) {
                console.error('Error checking if user is following:', e);
            }
        }

        checkIsFollowing(user.id);
    }, [user.id]);

    const follow = async (followerId:number)=>{
        try{
            await UserService.follow(followerId);
            setIsFollowing(true);
        }catch(e){
            console.error('Error following user:', e);
        }
    }

    const unfollow = async (followerId:number)=>{
        try{
            await UserService.unfollow(followerId);
            setIsFollowing(false);
        }catch(e){
            console.error('Error following user:', e);
        }
    }

    return (
        <div>
            <div className='miniProfile' onClick={() => {
                // navigate('/myprofile', { state: user })
            }}> 
                <div className='avatarAndName'>
                    {avatarUrl && <img src={avatarUrl} alt="User Avatar" />}
                    <div className='miniFollowerInfo'>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
                <button className={` ${isFollowing ? 'following' : 'not-following'}`} onClick={()=>{
                    if(isFollowing){
                        unfollow(user.id)
                    }
                    else{
                        follow(user.id)
                    }
                }}>{isFollowing ? 'Unfollow' : 'Follow'}</button>
            </div>
            <hr />
        </div>
    );
}

export default observer(MiniProfile);
