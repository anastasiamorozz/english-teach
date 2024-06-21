import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import MiniDrawer from '../../components/MiniDrawer/MiniDrawer';
import Footer from '../../components/Footer/Footer';
import ResultBlock from '../../components/ResultBlock/ResultBlock';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultPage:FC = () => {
    const navigator = useNavigate();
    const location = useLocation();
    const {topic} = location.state;
    console.log('Topic', topic);
    return (
        <div>
            <Header></Header>
            <MiniDrawer></MiniDrawer>
            <ResultBlock {...topic}></ResultBlock>
            <Footer></Footer>
        </div>
    );
}

export default observer(ResultPage);