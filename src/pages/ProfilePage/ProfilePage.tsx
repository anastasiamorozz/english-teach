import React, { FC } from 'react';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import Header from '../../components/Header/Header';
import { observer } from 'mobx-react-lite';
import Footer from '../../components/Footer/Footer';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import ProgressContainer from '../../components/ProgressContainer/ProgressContainer';
import './ProfilePage.css';
import Rank from '../../components/Rank/Rank';

const ProfilePage: FC = () => {
    return (
        <div>
            <Header></Header>
            <ProfileInfo></ProfileInfo>
            <div className='progressInfo'>
                <ProgressContainer></ProgressContainer>
                <Rank></Rank>
            </div>
            <LogoutButton></LogoutButton>
            <Footer></Footer>
        </div>
    );
}

export default observer(ProfilePage);