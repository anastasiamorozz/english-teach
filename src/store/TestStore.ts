import axios from "axios";
import { makeAutoObservable } from "mobx";
import { API_URL } from "../http";
import { ITopic } from "../models/ITopic";

interface IAnswer {
    questionId: number;
    answer: string;
}

class TestStore {
    answers: IAnswer[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async validateAnswer(questionId: number, answer: string): Promise<boolean> {
        try {
            const response = await axios.post(`${API_URL}/test/answer`, { wordId: questionId, answer });
            return response.data.correct; 
        } catch (error) {
            console.error(`Error validating answer for question ${questionId}:`, error);
            return false;
        }
    }

    async addAnswer(questionId: number, answer: string) {
        const isValid = await this.validateAnswer(questionId, answer);
        if (isValid) {
            const existingAnswer = this.answers.find(a => a.questionId === questionId);
            if (existingAnswer) {
                existingAnswer.answer = answer;
            } else {
                this.answers.push({ questionId, answer });
            }
        } else {
            console.log(`Answer for question ${questionId} is incorrect`);
        }
    }

    async getProgress(topicId: number) {
        try {
            const response = await axios.post(`${API_URL}/test/topic/words`, { topicId });
            const questionsCount: ITopic[] = response.data;
            return this.answers.length / questionsCount.length;
        } catch (error) {
            console.error(`Error fetching topic words for topic ${topicId}:`, error);
            return 0;
        }
    }

    removeAnswer(questionId: number) {
        this.answers = this.answers.filter(a => a.questionId !== questionId);
    }

    getAnswers() {
        return this.answers;
    }

    clearAnswers() {
        this.answers = [];
    }
}

export default new TestStore();
