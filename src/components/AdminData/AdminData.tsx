import React from 'react';
import { IUser } from '../../models/IUser';
import './AdminData.css';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AdminService from '../../services/AdminService';

const AdminData = (user:IUser) => {

    const maskEmail = (email: string) => {
        const [localPart, domain] = email.split('@');
        if (!domain) return email; 
        return `${localPart[0]}******@${domain}`;
    };

    const handleRole = async (userId:number)=>{
        await AdminService.changeUserRole(userId);
    }

    return (
        <div className='admins'>
            <div>
                <div><b>{user.firstName} {user.lastName}</b></div>
                {maskEmail(user.email)}
            </div>
            <button className='roleButton' onClick={()=>handleRole(user.id)}><AdminPanelSettingsIcon></AdminPanelSettingsIcon> Change user role</button>
        </div>
    );
}

export default AdminData;