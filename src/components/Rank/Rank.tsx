import React, { FC, useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { Context } from '../..';
import { IUser } from '../../models/IUser';
import UserService from '../../services/UserService';
import Loading from '../Loading/Loading';
import UserInRankedBlock from '../UserInRankedBlock/UserInRankedBlock';
import './Rank.css';

const Rank: FC = () => {
    const {store} = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState<IUser[]|null>(null);
    const navigate = useNavigate();



    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const res_users = await UserService.getRankOfUsers();
                setUsers(res_users.data);
                setIsLoading(false);
            } catch (e) {
                console.error('Error fetching info:', e);
            }
        };
    
        if (store) {
            fetchInfo();
        }
    }, [store]);

    if(!store.isAuth){
        return <Navigate to="/login" replace={true} />
    }

    return (
        <div>
            {isLoading?(
                <Loading></Loading>
            ):(
                <div className='rank'>
                <h4>Top Performing Student</h4>
                <ul>
                    <li>
                        <img src='first_rank.png' className='rankImg'></img>
                        {users ? (<UserInRankedBlock {...users[0]}></UserInRankedBlock>):(<Loading></Loading>)}
                    </li>
                    <li>
                    <img src='second-rank.png' className='rankImg'></img>
                    {users ? (<UserInRankedBlock {...users[1]}></UserInRankedBlock>):(<Loading></Loading>)}
                    </li>
                    <li>
                        <img src='third-rank.png' className='rankImg'></img>
                        {users ? (<UserInRankedBlock {...users[2]}></UserInRankedBlock>):(<Loading></Loading>)}
                    </li>
                    <li>
                    {users ? (<UserInRankedBlock {...users[3]}></UserInRankedBlock>):(<Loading></Loading>)}
                    </li>
                </ul>
            </div>
            )}
        </div>
    );
}

export default Rank;