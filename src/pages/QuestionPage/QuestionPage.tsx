import { observer } from 'mobx-react-lite';
import React, { FC, useEffect, useState } from 'react';
import { IWord } from '../../models/IWord';
import { useLocation, useNavigate } from 'react-router';
import Header from '../../components/Header/Header';
import MiniDrawer from '../../components/MiniDrawer/MiniDrawer';
import Footer from '../../components/Footer/Footer';
import QuestionBlock from '../../components/QuestionBlock/QuestionBlock';
import './QuestionPage.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import TopicService from '../../services/TopicService';
import TestStore from '../../store/TestStore';

const QuestionPage:FC = () => {
    const navigator = useNavigate();
    const location = useLocation();
    const {topic} = location.state;
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState<string>('');
    const [words, setWords] = useState<IWord[]>([]);

    useEffect(()=>{
        const fetchWords =async (topicId:number) => {
            try{
                const res_words = await TopicService.getTopicWords(topicId);
                setWords(res_words.data);
            }catch(e){
                console.log('Error: ', e)
            }
        }

        fetchWords(topic.id);
    }, [topic])

    useEffect(()=>{
        console.log('Answers: ', TestStore.getAnswers())
    }, [currentAnswer])

    if (words.length === 0) {
        return <div>No words available for this topic</div>;
    }

    const handleNextWord = () => {
        if (currentWordIndex < words.length - 1) {
            TestStore.addAnswer(currentWordIndex, currentAnswer);
            setCurrentWordIndex(currentWordIndex + 1);
        } else {
            navigator('/result', { state: { topic } });
        }
    };

    const handlePreviousWord = () => {
        if (currentWordIndex > words.length + 1) {
            setCurrentWordIndex(currentWordIndex - 1);
        } else {
            navigator('/topics');
        }
    };

    const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentAnswer(e.target.value);
    };

    const handleClear = () => {
        TestStore.clearAnswers();
    }; //це треба перенести в QuestionBlock

    return (
        <div>
            <Header></Header>
            <MiniDrawer></MiniDrawer>
            <div className='topicTitle'>Choose... ({((currentWordIndex+1)/words.length)*100}%)</div>
            <QuestionBlock key={words[currentWordIndex].id} {...words[currentWordIndex]}></QuestionBlock>
            <div className='buttonsGroup'>
                <button className='previousButton' onClick={handlePreviousWord}><ArrowLeftIcon></ArrowLeftIcon>Previous</button>
                <button className='nextButton' onClick={handleNextWord}>Next <ArrowRightIcon></ArrowRightIcon></button>
            </div>
            
            {/* <Footer></Footer> */}
        </div>
    );
}

export default observer(QuestionPage);