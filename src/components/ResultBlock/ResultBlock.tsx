import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import './ResultBlock.css';

const ResultBlock:FC = () => {
    return (
        <div className='result'>
            <div className='resultPhoto'>
                <img src='pana.png'></img>
            </div>
            <h2>Lesson complete!</h2>

            <ul>
                <li>Score: 100%</li>
                <li>Words: +10</li>
            </ul>
        </div>
    );
}

export default observer(ResultBlock);