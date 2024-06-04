import React, { FC, useContext, useState } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import './LoginForm.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {store} = useContext(Context);
    const navigate = useNavigate();

    const handleLogin = async () => {
        await store.login(email, password);
        if (store.isAuth) {
            navigate('/'); 
        }
    };

    return (
        <div className='form'>
            <h3>Welcome !</h3>
            <p></p>
            <h1>Sign in</h1>

            {store.errorMessage && <div className='error'>Authorization error: {store.errorMessage}</div>}

            <span>Email</span><br></br>
            <input 
                className='textInput'
                onChange={e => setEmail(e.target.value)}
                value={email}
                type='text'
                placeholder='Enter your email'
            ></input>

            <p></p><span>Password</span><br></br>
            <input 
                className='textInput'
                onChange={e => setPassword(e.target.value)}
                value={password}
                type='password'
                placeholder='Enter your password'
            ></input>

            <div className='line'>
                <form>
                    <input type='checkBox' name='rememberMe' className='checkInput'></input>
                    <label htmlFor='rememberMe'>Remember me</label>
                </form>

                <a>Forgot password?</a>
            </div>

            <button className='button' onClick={handleLogin}>Login</button>

            <p className='regLink'>Don’t have an Account? <Link to={'/reg'}><b>Register</b></Link></p>
        </div>
    );
}

export default observer(LoginForm);
