import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useState, useEffect } from 'react';
import UserService from '../../services/UserService';
import { Context } from '../..';
import { Navigate, useLocation, useNavigate } from 'react-router';
import {jwtDecode} from 'jwt-decode';
import { IUser } from '../../models/IUser';
import './ProfileInfo.css';
import LoginForm from '../LoginForm/LoginForm';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Loading from '../Loading/Loading';
import { URL } from 'url';



const ProfileInfo = () => {
    const {store} = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState<number | null>(null);
    const [firstName, setFirstName] = useState<string | undefined>("");
    const [lastName, setLastName] = useState<string | undefined>("");
    const [words, setWords] = useState<number | undefined>(0);
    const [followers, setFollowers] = useState<IUser[]|null>(null);
    const [following, setFollowing] = useState<IUser[]|null>(null);
    const [avatarUrl, setAvatarUrl] = useState<Blob | any>(undefined);
    const [owner, setOwner] = useState<IUser|null>(null);
    const navigate = useNavigate();

    try{
        const location = useLocation();
        const {user} = location.state;
        if(user){
            setOwner(user);
            setUserId(user.id);
        }
        console.log('Its not your profile')
    }catch(e){
        console.log('Its your profile')
    }

    useEffect(() => {
        console.log("Checking auth...");
        if (!localStorage.getItem('token')) {
            store.checkAuth();
            store.checkActivationStatus();
        }
    }, [store]);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken: DecodedToken = jwtDecode(token);
                console.log("Decoded token:", decodedToken);
                setUserId(decodedToken.id);
            } catch (e) {
                console.error('Invalid token:', e);
                localStorage.removeItem('token');
                store.setAuth(false);
            }
        }
    }, [store]);
    
    useEffect(() => {
        const fetchUserInfo = async (userId: number) => {
            console.log("Fetching user info for userId:", userId);
            try {
                const response = await UserService.getUserInfo(userId);
                const followers_res = await UserService.getUserFollowers();
                const following_res = await UserService.getUserFollowing();
                const words_res = await UserService.getUserWords();
                
                const user = response.data.user as IUser;
                console.log('user: ', user);
                if(user.photo){
                    const photo_res = await UserService.getAvatar(userId);
                    setAvatarUrl(photo_res);
                }
                setFollowers(followers_res.data);
                setFollowing(following_res.data);
                setFirstName(user.firstName);
                setLastName(user.lastName);
                setWords(words_res.data);
                setIsLoading(false);
            } catch (e) {
                console.error('Error fetching user info:', e);
            }
        };
    
        if (userId) {
            fetchUserInfo(userId);
        }
    }, [userId]);
    

    if(!store.isAuth || !store.isActivated){
        return <Navigate to="/login" replace={true} />
    }


    return (
        <div>
            {isLoading ? (
                <div className="profile-container">
                    <Loading></Loading>
                </div>
            ) : (
                <div className="profile-container">
                                <div className='main'>
                                <div className='avatar'>
                                    <img src={avatarUrl || './avatar.jpg'} alt='User Avatar' />
                                </div>
                
                                <div>
                                    <h1>{firstName} {lastName}</h1>
                                </div>
{/* 
                                {owner ? (
                                    <div>Its not your profile</div>
                                ):(
                                    <div>Your profile</div>
                                )} */}
                                
                                <div className='info'>
                                    <div className='details'>
                                        <p className='count'>{words ? words : 0}</p>
                                        <p className='description'>Words</p>
                                    </div>
                                    <img src='/Rectangle.png' alt='Separator' />
                                    <div className='details' onClick={()=>{
                                        navigate('/followers', { state: { followers } });
                                    }}>
                                        <p className='count'>{followers ? followers.length : 0}</p>
                                        <p className='description'>Followers</p>
                                    </div>
                                    <img src='/Rectangle.png' alt='Separator' />
                                    <div className='details'  onClick={()=>{navigate('/following', { state: { following }})}}>
                                        <p className='count'>{following ? following.length : 0}</p>
                                        <p className='description'>Following</p>
                                    </div>
                                </div>
                            </div>
                    </div>
            )}
        </div> 
    );

}

export default observer(ProfileInfo);
