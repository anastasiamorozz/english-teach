import { jwtDecode } from 'jwt-decode';
import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { Context } from '../..';
import { IDecodedToken } from '../../models/IDecodedToken ';
import { IUser } from '../../models/IUser';
import UserService from '../../services/UserService';
import './SettingsBasicInfo.css';

const SettingsBasicInfo: FC = () => {
    const { store } = useContext(Context);
    const [userId, setUserId] = useState<number | null>(null);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [avatar, setAvatar] = useState<File | null>(null);
    const navigate = useNavigate();

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
                const decodedToken: IDecodedToken = jwtDecode(token);
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
                const user = response.data.user as IUser;
                if (user.firstName && user.lastName) {
                    setFirstName(user.firstName);
                    setLastName(user.lastName);
                }
            } catch (e) {
                console.error('Error fetching user info:', e);
            }
        };

        if (userId) {
            fetchUserInfo(userId);
        }
    }, [userId]);

    const save = async (firstName: string, lastName: string) => {
        try {
            await UserService.changeFirstName(firstName);
            await UserService.changeLastName(lastName);
            if (avatar) {
                await uploadAvatar(avatar);
            }
            navigate('/myprofile')
        } catch (e) {
            console.log(e);
        }
    }

    const uploadAvatar = async (file: File) => {
        const formData = new FormData();
        formData.append('avatar', file);
        try {
            await UserService.uploadAvatar(formData);
        } catch (e) {
            console.error('Error uploading avatar:', e);
        }
    }

    if (!store.isAuth || !store.isActivated) {
        return <Navigate to="/login" replace={true} />;
    }

    return (
        <div className='settings'>
            <div className='title'>
                <h2>BASIC INFO</h2>
                <div>
                    <button className='cancelButton' onClick={() => { navigate('/') }}>Cancel</button>
                    <button className='saveButton' onClick={() => { save(firstName, lastName) }}>Save</button>
                </div>
            </div>

            <hr className='hrSettings'></hr>

            <div className='changeName'>
                <div>
                    <h3>First name</h3>
                    <input
                        type='text'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <h3>Last name</h3>
                    <input
                        type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
            </div>

            <h2>AVATAR</h2>
            <hr className='hrSettings'></hr>
            <form method="post">
                <input
                    type='file'
                    accept="image/*"
                    onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                            setAvatar(e.target.files[0]);
                        }
                    }}
                />
            </form>
        </div>
    );
}

export default observer(SettingsBasicInfo);
