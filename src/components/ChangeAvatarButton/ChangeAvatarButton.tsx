import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import './ChangeAvatarButton.css';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const ChangeAvatarButton:FC = () => {
    return (
        <div>
            <button className='photoButton'><AddAPhotoIcon></AddAPhotoIcon> Change photo</button>
        </div>
    );
}

export default observer(ChangeAvatarButton);