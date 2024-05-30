import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useState, useEffect } from 'react';
import UserService from '../../services/UserService';
import { Context } from '../..';
import { Navigate } from 'react-router';
import {jwtDecode} from 'jwt-decode';
import { IUser } from '../../models/IUser';
import './ProfileInfo.css';

const ProfileInfo: FC = () => {
    const {store} = useContext(Context);
    const [userId, setUserId] = useState(0);
    const [firstName, setFirstName] = useState<string | undefined>("");
    const [lastName, setLastName] = useState<string | undefined>("");

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken: DecodedToken = jwtDecode(token);
                setUserId(decodedToken.id);
            } catch (e) {
                console.error('Invalid token:', e);
                localStorage.removeItem('token');
                store.setAuth(false);
            }
        }
    }, [store]);

    async function fetchUserInfo(userId: number){
        try{
            const response = await UserService.getUserInfo(userId);
            const user = response.data.user as IUser;
            setFirstName(user.firstName);
            setLastName(user.lastName);
        }catch(e){
            console.error('Error fetching user info:', e);
        }

    }

    // if(!store.isAuth){
    //     return <Navigate to="/login" replace={true} />
    // }else{
    //     fetchUserInfo(userId);
    // }

    fetchUserInfo(userId);

    return (
        <div>
            <div className='main'>
                <div className='avatar'>
                    <img src='/avatar.jpg'></img>
                </div>

                <div>
                    <h1>{firstName || "User"} {lastName || "Bob"}</h1>
                </div>
                
                <div className='info'>
                    <div className='details'>
                        <p className='count'>12</p>
                        <p className='description'>Words</p>
                    </div>
                    <img src='/Rectangle.png'></img>
                    <div className='details'>
                        <p className='count'>234</p>
                        <p className='description'>Followers</p>
                    </div>
                    <img src='/Rectangle.png'></img>
                    <div className='details'>
                        <p className='count'>135</p>
                        <p className='description'>Following</p>
                    </div>
                </div>
            </div>

            <div className='logoutButton'>
                
            </div>
        </div>
    );
}

export default observer(ProfileInfo);
