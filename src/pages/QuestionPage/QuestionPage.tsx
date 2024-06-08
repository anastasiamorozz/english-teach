import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import { IWord } from '../../models/IWord';
import { useLocation, useNavigate } from 'react-router';
import Header from '../../components/Header/Header';
import MiniDrawer from '../../components/MiniDrawer/MiniDrawer';
import Footer from '../../components/Footer/Footer';
import QuestionBlock from '../../components/QuestionBlock/QuestionBlock';
import './QuestionPage.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const QuestionPage:FC = () => {
    const navigator = useNavigate();
    const location = useLocation();
    const {words} = location.state;
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    if (words.length === 0) {
        return <div>No words available for this topic</div>;
    }

    const handleNextWord = () => {
        if (currentWordIndex < words.length - 1) {
            setCurrentWordIndex(currentWordIndex + 1);
        } else {
            navigator('/result');
        }
    };

    const handlePreviousWord = () => {
        if (currentWordIndex > words.length + 1) {
            setCurrentWordIndex(currentWordIndex - 1);
        } else {
            navigator('/topics');
        }
    };

    return (
        <div>
            <Header></Header>
            <MiniDrawer></MiniDrawer>
            <QuestionBlock key={words[currentWordIndex].id} {...words[currentWordIndex]}></QuestionBlock>
            <div className='buttonsGroup'>
                <button className='previousButton' onClick={handlePreviousWord}><ArrowLeftIcon></ArrowLeftIcon>Previous</button>
                <button className='nextButton' onClick={handleNextWord}>Next <ArrowRightIcon></ArrowRightIcon></button>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default observer(QuestionPage);