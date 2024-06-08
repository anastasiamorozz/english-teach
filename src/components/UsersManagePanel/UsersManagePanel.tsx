import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { IUser } from '../../models/IUser';
import AdminData from '../AdminData/AdminData';
import './UsersManagePanel.css';
import UserSearch from '../UserSearch/UserSearch';
import AdminSearch from '../AdminSearch/AdminSearch';

const UsersManagePanel:FC = () => {
    const users: IUser[] = [
        { id: 1, email: 'conor@gmail.com', isActivated: true, firstName: 'Conor', lastName: 'Jordan', photo: '/avatar.jpg' },
        { id: 2, email: 'emma@yahoo.com', isActivated: false, firstName: 'Emma', lastName: 'Watson', photo: '/avatar.jpg' },
        { id: 3, email: 'liam@hotmail.com', isActivated: true, firstName: 'Liam', lastName: 'Smith', photo: '/avatar.jpg' },
        { id: 4, email: 'olivia@outlook.com', isActivated: false, firstName: 'Olivia', lastName: 'Brown', photo: '/avatar.jpg' }
    ]; 

    return (
        <div className='usersPanel'>
            Admins:
            <hr></hr>
            {users.map((user)=>(
                <AdminData key={user.id} {...user}></AdminData>
            ))}
            <hr></hr>
            <AdminSearch></AdminSearch>
        </div>
    );
}

export default observer(UsersManagePanel);