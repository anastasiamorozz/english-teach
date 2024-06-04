import React, { FC, useContext, useState } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [photo, setPhoto] = useState<string>('empty');
    const {store} = useContext(Context);
    const navigate = useNavigate();

    const handleReg = async () => {
        await store.registration(firstName, lastName, email, password);
        if (store.isAuth) {
            navigate('/'); 
        }
    };

    return (
        <div className='form'>
            <div>
                <h3>Welcome !</h3>
                <p></p>
                <h1>Sign up</h1>

                {store.errorMessage && <div className='error'>Authorization error: {store.errorMessage}</div>}

                <input 
                    className='textInput'
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                    type='text'
                    placeholder='First name'
                ></input>

                <input 
                    className='textInput'
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                    type='text'
                    placeholder='Last name'
                ></input>

                <input 
                    className='textInput'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type='text'
                    placeholder='Email'
                ></input>

                <input 
                    className='textInput'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type='password'
                    placeholder='Password'
                ></input>

                <div className='line'>
                    <form>
                        <input type='checkBox' name='rememberMe' className='checkInput'></input>
                        <label htmlFor='rememberMe'>Remember me</label>
                    </form>

                    <a>Forgot password?</a>
                </div>

                <button className='button' onClick={handleReg}>Registration</button>
            </div>
        </div>
    );
}

export default observer(RegistrationForm);