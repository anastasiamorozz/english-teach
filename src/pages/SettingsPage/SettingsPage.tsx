import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import MiniDrawer from '../../components/MiniDrawer/MiniDrawer';
import Footer from '../../components/Footer/Footer';
import './SettingsPage.css';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import SettingsBasicInfo from '../../components/SettingsBasicInfo/SettingsBasicInfo';
import ChangeAvatarButton from '../../components/ChangeAvatarButton/ChangeAvatarButton';

const SettingsPage: FC= () => {
    return (
        <div>
            <Header></Header>
            <MiniDrawer></MiniDrawer>
            <div className='settingsContainer'>
                <div className='profileInfo'>
                    <h2>Profile</h2>
                    <ProfileInfo></ProfileInfo>
                    <ChangeAvatarButton></ChangeAvatarButton>
                </div>
                <hr></hr>

                <SettingsBasicInfo></SettingsBasicInfo>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default observer(SettingsPage);