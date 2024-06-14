import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect, useState } from 'react';
import { ITopic } from '../../models/ITopic';
import './TopicBlock.css';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IWord } from '../../models/IWord';
import { useNavigate } from 'react-router';
import TopicService from '../../services/TopicService';
import { Context } from '../..';

const TopicBlock = (topic:ITopic) => {
    const navigator = useNavigate();
    

    const {store} = useContext(Context);

    return (
        <div className='topic' onClick={()=>{
            navigator('/test', { state: { topic } });
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