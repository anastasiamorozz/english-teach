import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import Header from '../../components/Header/Header';
import MiniDrawer from '../../components/MiniDrawer/MiniDrawer';
import Footer from '../../components/Footer/Footer';
import SearchTopic from '../../components/SearchTopic/SearchTopic';
import { ITopic } from '../../models/ITopic';
import TopicBlock from '../../components/TopicBlock/TopicBlock';
import './TopicsPage.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const topics: ITopic[] = [
    { id: 1, title: 'Java Language', level: 'Advanced' },
    { id: 2, title: 'Python Programming', level: 'Intermediate' },
    { id: 3, title: 'Web Development', level: 'Beginner' },
    { id: 4, title: 'Data Structures and Algorithms', level: 'Advanced' },
    { id: 5, title: 'Machine Learning', level: 'Intermediate' },
    { id: 6, title: 'Cybersecurity Basics', level: 'Beginner' },
    { id: 7, title: 'Cloud Computing', level: 'Advanced' },
    { id: 8, title: 'DevOps Practices', level: 'Intermediate' },
    { id: 9, title: 'Mobile App Development', level: 'Beginner' },
    { id: 10, title: 'Database Management', level: 'Advanced' },
    { id: 11, title: 'Software Testing', level: 'Intermediate' },
    { id: 12, title: 'Artificial Intelligence', level: 'Beginner' }
  ];





const TopicsPage: FC = () => {

    const [page, setPage]=useState(2);

    return (
        <div>
            <Header></Header>
            <MiniDrawer></MiniDrawer>
            <SearchTopic></SearchTopic>
            <div className='wrapper'>
                {topics.map((topic) => (
                    <TopicBlock key={topic.id} {...topic}></TopicBlock>
                ))}
            </div>

            <div className='pagesNavigation'>
                {page==1 ? (
                    <button onClick={()=>{setPage(page+1)}}><ArrowRightIcon></ArrowRightIcon></button>
                ) : (
                    <div>
                        <button onClick={()=>{setPage(page-1)}}><ArrowLeftIcon></ArrowLeftIcon></button>
                        <button onClick={()=>{setPage(page+1)}}><ArrowRightIcon></ArrowRightIcon></button>
                    </div>
                )}
            </div>
            
            <Footer></Footer>
        </div>
    );
}

export default observer(TopicsPage);