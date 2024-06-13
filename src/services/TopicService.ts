import { AxiosResponse } from "axios";
import $api from "../http";
import { ITopic } from "../models/ITopic";

export default class TopicService{
    static async getTopics(page:number, pageSize:number){
        return $api.post<{topics: ITopic[]}>('/test/topics', {page, pageSize});
    }
}