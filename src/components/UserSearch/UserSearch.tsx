import { observer } from 'mobx-react-lite';
import React, { FC, useEffect, useState } from 'react';
import './UserSearch.css';
import SearchIcon from '@mui/icons-material/Search';
import TopicService from '../../services/TopicService'; // імпорт сервісу
import UserService from '../../services/UserService';
import { IUser } from '../../models/IUser';

const UserSearch = () => {
    const [query, setQuery] = useState<string>('');
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        console.log('Updated users:', users);
    }, [users]);

    const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            console.log('Search query:', query);
            try {
                const response = await UserService.userSearch(query, 1, 10); // виклик функції пошуку
                setUsers(response.data);
            } catch (error) {
                console.error('Error during search:', error);
            }
        }
    };

    return (
        <div className='userSearch'>
            <input
                type='text'
                placeholder='Input name...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
            />
        </div>
    );
};

export default observer(UserSearch);
