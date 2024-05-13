import React, { FC, useContext, useState } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {store} = useContext(Context);

    // const navigate = useNavigate();

    return (
        <div className='loginForm'>
            <h3>Welcome !</h3>
            <p></p>
            <h1>Sign in</h1>

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

            <button onClick={()=>store.login(email,password)}>Login</button>

            <p className='regLink'>Don’y have an Account ?  <a href='/reg'><b>Register</b></a></p>
        </div>
    );
}

export default observer(LoginForm);   