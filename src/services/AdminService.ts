import { AxiosResponse } from "axios";
import $api from "../http";
import { IUser } from "../models/IUser";

export default class AdminService{
    static async getAdmins(): Promise<AxiosResponse<IUser[]>>{
        return $api.get('/admin/admins');
    }

    static async changeUserRole(userId: number){
        await $api.post('/admin/role', { userId });
    }
}