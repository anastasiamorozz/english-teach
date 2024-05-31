import React, { FC } from 'react';
import './ProgressContainer.css';
import { observer } from 'mobx-react-lite';

const ProgressContainer: FC = () => {
    return (
        <div className='progress'>
            <div className='mainProgress'>
                <p>32%</p>
            </div>

            <div className='infoProgress'>
                <p>Fluent in <img src='/uk.png' alt='UK Flag'></img> <span className="highlight">English</span></p>
            
                <div className='bottomInfo'>
                    <p>Words learned: <span className='count'>210</span></p>
                    <p>Topics learned: <span className='count'>7</span></p>
                </div>
            </div>
        </div>
    );
}

export default observer(ProgressContainer);