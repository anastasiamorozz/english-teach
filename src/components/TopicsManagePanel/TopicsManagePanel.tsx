import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import { ITopic } from '../../models/ITopic';
import TopicBlock from '../TopicBlock/TopicBlock';
import './TopicsManagePanel.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const topics: ITopic[] = [
    { id: 1, title: 'Java Language', level: 'Advanced' },
    { id: 2, title: 'Python Programming', level: 'Intermediate' },
    { id: 3, title: 'Web Development', level: 'Beginner' },
    { id: 4, title: 'Data Structures and Algorithms', level: 'Advanced' },
  ];

const TopicsManagePanel:FC = () => {
    const [page, setPage]=useState(1);
      
    return (
        <div className='topicsPanel'>
            <hr></hr>
            <div className='topicButtons'>
                    <button><AddIcon></AddIcon>Add</button>
                    <button><DeleteIcon></DeleteIcon>Delete</button>
                    <button><EditIcon></EditIcon>Edit</button>
            </div>
            <div className='topicsAdmin'>
                {topics.map((topic)=>(
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
        </div>
    );
}

export default observer(TopicsManagePanel);