import { makeAutoObservable } from "mobx";

interface IAnswer {
    questionId: number;
    answer: string;
}

class TestStore {
    answers: IAnswer[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addAnswer(questionId: number, answer: string) {
        const existingAnswer = this.answers.find(a => a.questionId === questionId);
        if (existingAnswer) {
            existingAnswer.answer = answer;
        } else {
            this.answers.push({ questionId, answer });
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
