import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import './AdminSearch.css';

const AdminSearch:FC = () => {
    return (
        <div className='adminSearch'>
            <input type='text' placeholder='user@gmail.com'></input>
        </div>
    );
}

export default observer(AdminSearch);