import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect, useState } from 'react';
import { IUser } from '../../models/IUser';
import AdminData from '../AdminData/AdminData';
import './UsersManagePanel.css';
import UserSearch from '../UserSearch/UserSearch';
import AdminSearch from '../AdminSearch/AdminSearch';
import AdminService from '../../services/AdminService';
import { Context } from '../..';

const UsersManagePanel:FC = () => {
    const {store} = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(()=>{
        const fetchUsers = async () =>{
            try{
                const res_admins = await AdminService.getAdmins();
                setUsers(res_admins.data);
            }catch(e){
                console.error(e);
            }
        }

        fetchUsers();
    }, [store])

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