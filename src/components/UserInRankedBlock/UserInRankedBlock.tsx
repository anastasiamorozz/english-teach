import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import './UserInRankedBlock.css';

const UserInRankedBlock: FC = () => {
    return (
        <div className='user'>
            <img src='/avatar.jpg' className='avatar'></img>
            <div className='info'>
                <p className='name'>John Bern</p>
                <p className='words'>Words: 1000</p>
            </div>
        </div>
    );
}

export default observer(UserInRankedBlock);