import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { ITopic } from '../../models/ITopic';
import TopicService from '../../services/TopicService';
import TestStore from '../../store/TestStore';
import './ResultBlock.css';

const ResultBlock = (topic: ITopic) => {
    const [resultSaved, setResultSaved] = useState(false); 

    const saveResult = async (topicId: number, answersCount: number) => {
        try {
            await TopicService.saveResult(topicId, answersCount);
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

    return (
        <div className='result'>
            <div className='resultPhoto'>
                <img src='pana.png' alt='Result' />
            </div>
            <h2>Lesson complete!</h2>
            <ul>
                <li>Words: +{TestStore.getAnswers().length}</li>
            </ul>
        </div>
    );
}

export default observer(ResultBlock);
