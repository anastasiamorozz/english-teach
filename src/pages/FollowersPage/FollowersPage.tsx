import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import './FollowersPage.css';
import Header from '../../components/Header/Header';
import MiniDrawer from '../../components/MiniDrawer/MiniDrawer';
import Footer from '../../components/Footer/Footer';
import { IUser } from '../../models/IUser';
import MiniProfile from '../../components/MiniProfile/MiniProfile';
import { useLocation } from 'react-router-dom';

const FollowersPage:FC = () => {  
    const location = useLocation();
    const {followers} = location.state;

    return (
        <div>
            <Header></Header>
            <MiniDrawer></MiniDrawer>
            <h1 className='followersTitle'>Followers</h1>
            {console.log(followers)}
            {followers.map((user: IUser)=>(
                // <p>{user.firstName}</p>
                <MiniProfile key={user.id} {...user}></MiniProfile>
            ))}
        </div>
    );
}

export default observer(FollowersPage);