import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import './UserSearch.css';
import SearchIcon from '@mui/icons-material/Search';

const UserSearch:FC = () => {
    return (
        <div className='userSearch'>
            <input type='text' placeholder='Input name...'></input>
        </div>
    );
}

export default observer(UserSearch);