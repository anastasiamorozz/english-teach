import { observer } from 'mobx-react-lite';
import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../../models/IUser';
import Header from '../../components/Header/Header';
import MiniDrawer from '../../components/MiniDrawer/MiniDrawer';
import Footer from '../../components/Footer/Footer';
import MiniProfile from '../../components/MiniProfile/MiniProfile';
import UserSearch from '../../components/UserSearch/UserSearch';
import UserService from '../../services/UserService';
import './FollowingPage.css';
import { useLocation } from 'react-router';

const FollowingPage:FC = () => {

    const location = useLocation();
    const {following}=location.state;
    const [query, setQuery] = useState<string>('');
    const [users, setUsers] = useState<IUser[]>(following);

    useEffect(() => {
        console.log('Updated users:', users);
    }, [users]);
    
    const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if(query===''){
                setUsers(following);
            }
            else{
                try {
                    const response = await UserService.userSearch(query, 1, 10); 
                    setUsers(response.data);
                } catch (error) {
                    console.error('Error during search:', error);
                }
            }
        }
    };
    
    return (
        <div>
            <Header></Header>
            <MiniDrawer></MiniDrawer>
            <h1 className='followersTitle'>Subscriptions</h1>
            <div className='userSearch'>
                <input
                    type='text'
                    placeholder='Input name...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </div>
            {users.length===0 ? (
                <div>No one here...</div>
            ):(
                users.map((user) => (
                    <MiniProfile key={user.id} {...user} />
                ))
            )}
        </div>
    );
}

export default observer(FollowingPage);