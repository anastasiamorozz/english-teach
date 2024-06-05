import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import './SettingsBasicInfo.css';

const SettingsBasicInfo:FC = () => {
    return (
        <div className='settings'>
            <div className='title'>
                <h2>BASIC INFO</h2>
                <div>
                    <button className='cancelButton'>Cancel</button>
                    <button className='saveButton'>Save</button>
                </div>
            </div>

            <hr></hr>

            <div className='changeName'>
                <div>
                    <h3>First name</h3>
                    <input type='text' autoComplete=''></input>
                </div>
                <div>
                    <h3>Last name</h3>
                    <input type='text' autoComplete=''></input>
                </div>
            </div>

            <div className='changeEmail'>
                <h3>Email</h3>
                <input type='text' autoComplete=''></input>
            </div>
        </div>
    );
}

export default observer(SettingsBasicInfo);