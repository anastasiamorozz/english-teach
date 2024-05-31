import React, { FC } from 'react';
import UserInRankedBlock from '../UserInRankedBlock/UserInRankedBlock';
import './Rank.css';

const Rank: FC = () => {
    return (
        <div className='rank'>
            <h4>Top Performing Student</h4>
            <ul>
                <li>
                    <img src='first_rank.png' className='rankImg'></img>
                    <UserInRankedBlock></UserInRankedBlock>
                </li>
                <li>
                <img src='second-rank.png' className='rankImg'></img>
                    <UserInRankedBlock></UserInRankedBlock>
                </li>
                <li>
                    <img src='third-rank.png' className='rankImg'></img>
                    <UserInRankedBlock></UserInRankedBlock>
                </li>
                <li>
                    <UserInRankedBlock></UserInRankedBlock>
                </li>
            </ul>
        </div>
    );
}

export default Rank;