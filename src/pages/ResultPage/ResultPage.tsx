import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import MiniDrawer from '../../components/MiniDrawer/MiniDrawer';
import Footer from '../../components/Footer/Footer';
import ResultBlock from '../../components/ResultBlock/ResultBlock';

const ResultPage:FC = () => {
    return (
        <div>
            <Header></Header>
            <MiniDrawer></MiniDrawer>
            <ResultBlock></ResultBlock>
            <Footer></Footer>
        </div>
    );
}

export default observer(ResultPage);