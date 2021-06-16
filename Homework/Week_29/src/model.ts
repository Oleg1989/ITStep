import { Question } from "./classElemet/question";
import { Answer } from "./classElemet/answer";

export class Model {
    private _elementQuestions: Question[];
    private _elementAnswers: Answer[];
    constructor() {
        let arrQuestions = localStorage.getItem("elementQuestions");
        if (arrQuestions) {
            this._elementQuestions = JSON.parse(arrQuestions);
        } else {
            this._elementQuestions = [];
        }
        let arrAnswers = localStorage.getItem("elementAnswers");
        if (arrAnswers) {
            this._elementAnswers = JSON.parse(arrAnswers);
        } else {
            this._elementAnswers = [];
        }
    }
    get questions(): Question[] {
        return this._elementQuestions;
    }
    get answers(): Answer[] {
        return this._elementAnswers;
    }
    addQuestion(question: Question): void {
        this._elementQuestions.push(question);
        this._commitQuestions(this._elementQuestions);
    }
    addAnswer(answer: Answer): void {
        if (!this._elementAnswers.find(element => element !== answer)) {
            this._elementAnswers.push(answer);
            this._commitAnswers(this._elementAnswers);
        }
        else {
            throw new Error("Element is not exist!!!");
        }
    }
    _commitQuestions(questions: Question[]) {
        localStorage.setItem("elementQuestions", JSON.stringify(questions));
    }
    _commitAnswers(answers: Answer[]) {
        localStorage.setItem("elementAnswers", JSON.stringify(answers));
    }
}