import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { IUser } from '../../models/IUser';
import Header from '../../components/Header/Header';
import MiniDrawer from '../../components/MiniDrawer/MiniDrawer';
import Footer from '../../components/Footer/Footer';
import MiniProfile from '../../components/MiniProfile/MiniProfile';
import UserSearch from '../../components/UserSearch/UserSearch';

const FollowingPage:FC = () => {
    const users: IUser[] = [
        { id: 1, email: 'conor@gmail.com', isActivated: true, firstName: 'Conor', lastName: 'Jordan', photo: '/avatar.jpg' },
        { id: 2, email: 'emma@yahoo.com', isActivated: false, firstName: 'Emma', lastName: 'Watson', photo: '/avatar.jpg' },
        { id: 3, email: 'liam@hotmail.com', isActivated: true, firstName: 'Liam', lastName: 'Smith', photo: '/avatar.jpg' },
        { id: 4, email: 'olivia@outlook.com', isActivated: false, firstName: 'Olivia', lastName: 'Brown', photo: '/avatar.jpg' },
        { id: 5, email: 'noah@gmail.com', isActivated: true, firstName: 'Noah', lastName: 'Johnson', photo: '/avatar.jpg' },
        { id: 6, email: 'ava@yahoo.com', isActivated: true, firstName: 'Ava', lastName: 'Williams', photo: '/avatar.jpg' },
        { id: 7, email: 'william@hotmail.com', isActivated: false, firstName: 'William', lastName: 'Jones', photo: '/avatar.jpg' },
        { id: 8, email: 'sophia@outlook.com', isActivated: true, firstName: 'Sophia', lastName: 'Miller', photo: '/avatar.jpg' },
        { id: 9, email: 'james@gmail.com', isActivated: false, firstName: 'James', lastName: 'Davis', photo: '/avatar.jpg' },
        { id: 10, email: 'isabella@yahoo.com', isActivated: true, firstName: 'Isabella', lastName: 'Garcia', photo: '/avatar.jpg' }
    ];
    
    return (
        <div>
            <Header></Header>
            <MiniDrawer></MiniDrawer>
            <h1 className='followersTitle'>Subscriptions</h1>
            <UserSearch></UserSearch>
            {users.map((user)=>(
                <MiniProfile key={user.id} {...user}></MiniProfile>
            ))}
            <Footer></Footer>
        </div>
    );
}

export default observer(FollowingPage);