import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { ITopic } from '../../models/ITopic';
import './TopicBlock.css';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TopicBlock = (topic:ITopic) => {
    return (
        <div className='topic'>
            <img src={topic.photoUrl || './topic.jpg'}></img>
            <div className='topicInfo'>
                <h2>{topic.title}</h2>
                <p><LightbulbIcon></LightbulbIcon> {topic.level}</p>
                <button>Let`s go <ArrowForwardIosIcon></ArrowForwardIosIcon></button>
            </div>
        </div>
    );
}

export default observer(TopicBlock);