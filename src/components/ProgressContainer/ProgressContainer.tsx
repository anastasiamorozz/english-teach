import React, { FC, useContext, useState, useEffect } from 'react';
import './ProgressContainer.css';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import UserService from '../../services/UserService';
import { Navigate, useNavigate } from 'react-router';
import Loading from '../Loading/Loading';

const ProgressContainer: FC = () => {
    const {store} = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);
    const [words, setWords] = useState<number | undefined>(0);
    const [topics, setTopics] = useState<number | undefined>(0);
    const [progress, setProgress] = useState<number | undefined>(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            store.checkAuth();
        }
    }, [])

    const fetchUserInfo = async () => {
        try {
            const words_res = await UserService.getUserWords();
            const topics_res = await UserService.getUserTopics();
            const progress_res = await UserService.getUserProgress();
            setTopics(topics_res.data.length);
            setWords(words_res.data);
            setProgress(progress_res.data);
            setIsLoading(false);
        } catch (e) {
            console.error('Error fetching user info:', e);
        }
    };

    if(!store.isAuth){
        return <Navigate to="/login" replace={true} />
    }else{
        fetchUserInfo();
    }
    
    return (
        <div>
            {isLoading?(
                <div className='progress'>
                    <Loading></Loading>
                </div>
            ):(
                <div className='progress'>
                        <div className='mainProgress'>
                            <p>{progress}%</p>
                        </div>
            
                        <div className='infoProgress'>
                            <p>Fluent in <img src='/uk.png' alt='UK Flag'></img> <span className="highlight">English</span></p>
                        
                            <div className='bottomInfo'>
                                <p>Words learned: <span className='count'>{words}</span></p>
                                <p>Topics learned: <span className='count'>{topics}</span></p>
                            </div>
                        </div>
                </div>
            )}
        </div>
    );
}

export default observer(ProgressContainer);