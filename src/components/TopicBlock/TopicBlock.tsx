import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { ITopic } from '../../models/ITopic';
import './TopicBlock.css';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useNavigate } from 'react-router';
import TopicService from '../../services/TopicService';

const TopicBlock = (topic: ITopic) => {
    const navigator = useNavigate();
    const [topicSaved, setTopicSaved] = useState(false);

    const saveTopic = async (topicId: number) => {
        try {
            await TopicService.saveTopic(topicId);
            setTopicSaved(true);
        } catch (e) {
            console.error(e);
        }
    }

    const handleClick = async () => {
        if (!topicSaved) {
            await saveTopic(topic.id);
        }
        navigator('/test', { state: { topic } });
    };

    return (
        <div className='topic' onClick={handleClick}>
            <img src={topic.photoUrl || './topic.jpg'} alt={topic.title} />
            <div className='topicInfo'>
                <h2>{topic.title}</h2>
                <p><LightbulbIcon className='icon' /> {topic.level}</p>
            </div>
        </div>
    );
}

export default observer(TopicBlock);
