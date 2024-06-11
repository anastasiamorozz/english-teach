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
    // const users: IUser[] = [
    //     { id: 1, email: 'conor@gmail.com', isActivated: true, firstName: 'Conor', lastName: 'Jordan', photo: '/avatar.jpg' },
    //     { id: 2, email: 'emma@yahoo.com', isActivated: false, firstName: 'Emma', lastName: 'Watson', photo: '/avatar.jpg' },
    //     { id: 3, email: 'liam@hotmail.com', isActivated: true, firstName: 'Liam', lastName: 'Smith', photo: '/avatar.jpg' },
    //     { id: 4, email: 'olivia@outlook.com', isActivated: false, firstName: 'Olivia', lastName: 'Brown', photo: '/avatar.jpg' },
    //     { id: 5, email: 'noah@gmail.com', isActivated: true, firstName: 'Noah', lastName: 'Johnson', photo: '/avatar.jpg' },
    //     { id: 6, email: 'ava@yahoo.com', isActivated: true, firstName: 'Ava', lastName: 'Williams', photo: '/avatar.jpg' },
    //     { id: 7, email: 'william@hotmail.com', isActivated: false, firstName: 'William', lastName: 'Jones', photo: '/avatar.jpg' },
    //     { id: 8, email: 'sophia@outlook.com', isActivated: true, firstName: 'Sophia', lastName: 'Miller', photo: '/avatar.jpg' },
    //     { id: 9, email: 'james@gmail.com', isActivated: false, firstName: 'James', lastName: 'Davis', photo: '/avatar.jpg' },
    //     { id: 10, email: 'isabella@yahoo.com', isActivated: true, firstName: 'Isabella', lastName: 'Garcia', photo: '/avatar.jpg' }
    // ];    
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