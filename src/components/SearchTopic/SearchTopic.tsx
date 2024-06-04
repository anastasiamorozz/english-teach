import { Input } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import './SearchTopic.css';

const SearchTopic: FC = () => {
    return (
        <div className='searchContainer'>
            <p>What do you want to learn?</p>
            <div className='searchParams'>
                <input className='titleSearch' type='text' placeholder='Find courses, skills, software etc'></input>
                <input className='levelSearch' type='text' placeholder='Level'></input>
                <button>Search</button>
            </div>
        </div>
    );
}

export default observer(SearchTopic);