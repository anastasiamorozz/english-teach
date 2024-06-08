import React from 'react';
import { IUser } from '../../models/IUser';
import './AdminData.css';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const AdminData = (user:IUser) => {

    const maskEmail = (email: string) => {
        const [localPart, domain] = email.split('@');
        if (!domain) return email; 
        return `${localPart[0]}******@${domain}`;
    };

    return (
        <div className='admins'>
            <div>
                <div><b>{user.firstName} {user.lastName}</b></div>
                {maskEmail(user.email)}
            </div>
            <button className='roleButton'><AdminPanelSettingsIcon></AdminPanelSettingsIcon> Change user role</button>
        </div>
    );
}

export default AdminData;