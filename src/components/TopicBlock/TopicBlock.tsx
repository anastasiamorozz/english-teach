import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { ITopic } from '../../models/ITopic';
import './TopicBlock.css';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IWord } from '../../models/IWord';
import { useNavigate } from 'react-router';

const TopicBlock = (topic:ITopic) => {
    const navigator = useNavigate();

    const words: IWord[] = [
        {id: 1, word:'Hello', meaning:'Привіт', fakeMeaning:['Тварина', 'Собака', 'Сонце'], topic: 1},
        {id: 2, word:'Dog', meaning:'Собака', fakeMeaning:['Тварина', 'Привіт', 'Сонце'], topic: 1}
    ]

    return (
        <div className='topic' onClick={()=>{
            navigator('/test', { state: { words } });
            }}>
            <img src={topic.photoUrl || './topic.jpg'}></img>
            <div className='topicInfo'>
                <h2>{topic.title}</h2>
                <p><LightbulbIcon className='icon'></LightbulbIcon> {topic.level}</p>
                {/* <button><ArrowForwardIosIcon></ArrowForwardIosIcon></button> */}
            </div>
        </div>
    );
}

export default observer(TopicBlock);