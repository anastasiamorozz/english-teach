import { AxiosResponse } from "axios";
import $api from "../http";
import { ITopic } from "../models/ITopic";

export default class TopicService{
    static async getTopics(page:number, pageSize:number){
        return $api.post<{topics: ITopic[]}>('/test/topics', {page, pageSize});
    }

    static async topicSearch(title: string, level: string, page: number, limit: number) {
        const response = await $api.post(`/test/topic/search`,{title, level,page, limit});
        return response;
    }

    static async getTopicWords(topicId:number){
        return $api.post('/test/topic/words', {topicId});
    }

    static async saveResult(topicId: number, correctAnswers: number): Promise<AxiosResponse>{
        return $api.put('/test/result', {topicId, correctAnswers});
    }

    static async saveTopic(topicId: number): Promise<AxiosResponse>{
        return $api.put('/test/topic/start', {topicId});
    }
}