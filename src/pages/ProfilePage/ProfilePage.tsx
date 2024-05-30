import React, { FC } from 'react';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import Header from '../../components/Header/Header';
import { observer } from 'mobx-react-lite';

const ProfilePage: FC = () => {
    return (
        <div>
            <Header></Header>
            <ProfileInfo></ProfileInfo>
        </div>
    );
}

export default observer(ProfilePage);