import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { ITopic } from '../../models/ITopic';
import TopicService from '../../services/TopicService';
import TestStore from '../../store/TestStore';
import './ResultBlock.css';

const ResultBlock = (topic: ITopic) => {
    const [resultSaved, setResultSaved] = useState(false); 
    const [words, setWords]=useState(0);
    const [total, setTotal]=useState(0);

    useEffect(()=>{
        const fetchWords =async (topicId:number) => {
            try{
                const res_words = await TopicService.getTopicWords(topicId);
                setTotal(res_words.data.length);
            }catch(e){
                console.log('Error: ', e)
            }
        }

        fetchWords(topic.id);
    }, [topic])

    const saveResult = async (topicId: number, answersCount: number) => {
        try {
            const wordsCount = TestStore.getAnswers().length-1;
            setWords(wordsCount)
            console.log('WORDS:',TestStore.getAnswers());
            await TopicService.saveResult(topicId, answersCount);
            TestStore.clearAnswers();
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        if (!resultSaved) { 
            saveResult(topic.id, TestStore.getAnswers().length);
            setResultSaved(true); 
        }
    }, [resultSaved]); 

    const statistic = (words:number, total: number) =>{
        return words*100/total;
    }

    return (
        <div className='result'>
            <div className='resultPhoto'>
                <img src='pana.png' alt='Result' />
            </div>
            <h2>Lesson complete!</h2>
            <ul>
                <li>Words correct: {words}</li>
                <li>Total words: {total}</li>
                <li>Your success in this: {statistic(words, total)}%</li>
            </ul>
        </div>
    );
}

export default observer(ResultBlock);
