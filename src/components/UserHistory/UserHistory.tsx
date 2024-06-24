import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import HistoryIcon from '@mui/icons-material/History';
import './UserHistory.css';
import { ITopic } from '../../models/ITopic';
import UserService from '../../services/UserService';
import { Context } from '../..';
import TopicBlock from '../TopicBlock/TopicBlock';
import Loading from '../Loading/Loading'; 

const UserHistory = () => {
    const { store } = useContext(Context);
    const [topics, setTopics] = useState<ITopic[]>([]);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const res_topics = await UserService.getHistory();
                setTopics(res_topics.data);
                setIsLoading(false); 
            } catch (error) {
                console.error('Error fetching topics:', error);
            }
        }

        fetchTopics();
    }, [store]);

    return (
        <div className='history'>
            <div className='historyTitle'>
                <HistoryIcon />
                Recently started:
            </div>

            <div>
                {isLoading ? ( 
                    <Loading />
                ) : topics.length > 0 ? (
                    topics.map((topic) => (
                        <TopicBlock key={topic.id} {...topic} />
                    ))
                ) : (
                    <div>No topics yet</div>
                )}
            </div>
        </div>
    );
}

export default observer(UserHistory);
