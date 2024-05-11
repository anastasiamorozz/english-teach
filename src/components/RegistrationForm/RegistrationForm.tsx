import React, { FC, useContext, useState } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const RegistrationForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [photo, setPhoto] = useState<string>('empty');
    const {store} = useContext(Context);

    return (
        <div>
            <div>
                <input 
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                    type='text'
                    placeholder='First name'
                ></input>

                <input 
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                    type='text'
                    placeholder='Last name'
                ></input>

                <input 
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type='text'
                    placeholder='Email'
                ></input>

                <input 
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type='password'
                    placeholder='Password'
                ></input>

                <button onClick={()=>store.registration(email, password, firstName, lastName, photo)}>Reg</button>
            </div>
        </div>
    );
}

export default observer(RegistrationForm);