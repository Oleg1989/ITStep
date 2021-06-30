import { Question } from "./classElemet/question";

export class Model {
    private _elementQuestions: Question[];
    constructor() {
        let arrQuestions = localStorage.getItem("elementQuestions");
        if (arrQuestions) {
            this._elementQuestions = JSON.parse(arrQuestions);
        } else {
            this._elementQuestions = [];
        }
    }
    get questions(): Question[] {
        return [...this._elementQuestions];
    }
    addQuestion(question: Question): void {
        this._elementQuestions.push(question);
        this._commitQuestions(this._elementQuestions);
    }
    deleteQuestions(): void {
        this._elementQuestions.length = 0;
        this._commitQuestions(this._elementQuestions);
    }
    _commitQuestions(questions: Question[]) {
        localStorage.setItem("elementQuestions", JSON.stringify(questions));
    }

}