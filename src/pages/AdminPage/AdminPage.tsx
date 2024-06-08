import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import UsersManagePanel from '../../components/UsersManagePanel/UsersManagePanel';
import TopicsManagePanel from '../../components/TopicsManagePanel/TopicsManagePanel';

const AdminPage:FC = () => {
    return (
        <div>
            <Header></Header>
            <TopicsManagePanel></TopicsManagePanel>
            <UsersManagePanel></UsersManagePanel>
        </div>
    );
}

export default observer(AdminPage);