import { jwtDecode } from 'jwt-decode';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Context } from '../..';
import Header from '../../components/Header/Header';
import './ActivationPage.css';

const ActivationPage = () => {
    const {store} = useContext(Context);
    const [isActivated, setIsActivated] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken: DecodedToken = jwtDecode(token);
                console.log("Decoded token:", decodedToken);
                setIsActivated(decodedToken.isActivated);
            } catch (e) {
                console.error('Invalid token:', e);
                localStorage.removeItem('token');
                store.setAuth(false);
            }
        }
    }, [store]);
    
    if(isActivated){
        return <Navigate to="/topics" replace={true} />
    }

    return (
        <div>
            <Header></Header>
            <div  className='activationPage'>
            <h1>Please, check your email</h1>
            <p>
            We have sent you an email. Check your Spam box if you don't find the email you want.
            Follow the link in the letter and your account will be activated!
            </p>
            </div>
        </div>
    );
}

export default ActivationPage;