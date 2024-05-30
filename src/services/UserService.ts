import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";
import { IUser } from "../models/IUser";

export default class UserService{
    static fetchUsers(): Promise<AxiosResponse<IUser[]>>{
        return $api.get<IUser[]>('/auth/users')
    }

    static async getUserInfo(userId: number) {
        return $api.post<{ user: IUser }>('/user/info', { userId });
    }

}