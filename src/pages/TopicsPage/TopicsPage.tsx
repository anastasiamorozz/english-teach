import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import MiniDrawer from '../../components/MiniDrawer/MiniDrawer';
import Footer from '../../components/Footer/Footer';
import SearchTopic from '../../components/SearchTopic/SearchTopic';
import { ITopic } from '../../models/ITopic';
import TopicBlock from '../../components/TopicBlock/TopicBlock';
import './TopicsPage.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import TopicService from '../../services/TopicService';
import Loading from '../../components/Loading/Loading';
import { Context } from '../..';

const TopicsPage = () => {
    const {store} = useContext(Context);
    const [page, setPage] = useState<number>(1);
    const [topics, setTopics] = useState<ITopic[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTopics = async (page: number, pageSize: number) => {
            try {
                const res_topics = await TopicService.getTopics(page, pageSize);
                const topicsList = res_topics.data.topics as ITopic[];
                setTopics(topicsList);
                console.log('Topics: ', topics)
            } catch (error) {
                console.error('Error fetching topics:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchTopics(page, 12);
    }, [store]);

    return (
        <div>
            <Header />
            <MiniDrawer />
            <SearchTopic />
            <div className='wrapper'>
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

            <div className='pagesNavigation'>
                {page === 1 ? (
                    <button onClick={() => setPage(page + 1)}>
                        <ArrowRightIcon />
                    </button>
                ) : (
                    <div>
                        <button onClick={() => setPage(page - 1)}>
                            <ArrowLeftIcon />
                        </button>
                        <button onClick={() => setPage(page + 1)}>
                            <ArrowRightIcon />
                        </button>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default observer(TopicsPage);
