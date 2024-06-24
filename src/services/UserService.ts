import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";
import { IUser } from "../models/IUser";
import { ITopic } from "../models/ITopic";

export default class UserService{
    static fetchUsers(): Promise<AxiosResponse<IUser[]>>{
        return $api.get<IUser[]>('/auth/users')
    }

    static async getUserInfo(userId: number) {
        const res = await $api.post<{ user: IUser }>('/user/info', { userId });
        return res;
    }

    static getUserFollowers(): Promise<AxiosResponse<IUser[]>>{
        return $api.get('/user/followers');
    }

    static getUserFollowing(): Promise<AxiosResponse<IUser[]>>{
        return $api.get('/user/subscriptions');
    }

    static getUserWords(): Promise<AxiosResponse<number>>{
        return $api.get('/user/words');
    }

    static getUserTopics(): Promise<AxiosResponse<ITopic[]>>{
        return $api.get('/user/topics');
    }

    static getUserProgress(): Promise<AxiosResponse<number>>{
        return $api.get('/user/progress');
    }

    static getRankOfUsers(): Promise<AxiosResponse<IUser[]>>{
        return $api.get('/user/rank');
    }

    static async getAvatar(userId: number) {
        const response = await $api.post(`/user/getAvatar`,{userId}, {
            responseType: 'blob', 
        });
        return URL.createObjectURL(response.data);
    }

    static async userSearch(query: string, page: number, limit: number) {
        const response = await $api.post(`/user/search`,{query, page, limit});
        return response;
    }

    static getFollowings(): Promise<AxiosResponse<IUser[]>>{
        return $api.get('/user/subscriptions');
    }

    static async changeFirstName(firstName: string){
        return await $api.post('/user/changeFirstName',{firstName});
    }

    static async changeLastName(lastName: string){
        return await $api.post('/user/changeLastName',{lastName});
    }

    static async uploadAvatar(formData: FormData) {
        return await $api.post('/user/changeAvatar', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}